<script lang="ts">
	import type { YouTubePlayer as YouTubePlayerType } from 'youtube-player/dist/types';
	import YouTubePlayer from 'youtube-player';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Button from '../components/Button.svelte';
	import MultiRange from '../components/MultiRange.svelte';

	let start = 0;
	let stop: number;
	let youtubeId: string;

	let player: YouTubePlayerType;
	let currentTime = 0;
	let rafTimetracker: number;
	let duration = 0;
	let isPlaying = false;

	$: if (browser && youtubeId) sessionStorage.setItem('youtubeId', youtubeId);
	// Load youtube player
	$: if (browser && youtubeId) player.loadVideoById(youtubeId, start, '480');
	// Looping logic
	$: if (player && currentTime >= stop) {
		player.seekTo(start, true);
	}

	onMount(() => {
		youtubeId = sessionStorage.getItem('youtubeId') || '';

		player = YouTubePlayer('player', {
			height: '100%',
			width: '100%',
			playerVars: {
				modestbranding: 1,
				rel: 0,
				controls: 0,
				autoplay: 0
			}
		});
		player.on('stateChange', async ({ data }) => {
			rafTimetracker && cancelAnimationFrame(rafTimetracker);
			isPlaying = false;
			// Data === 1 means playing state
			if (data === 1) {
				isPlaying = true;
				rafTimetracker = requestAnimationFrame(trackTime);
				duration = duration || (await player.getDuration());
				stop = stop || duration;
			}
		});
	});

	function secondsToLabel(value: number) {
		if (!value) return '';
		const minutes = Math.floor(value / 60);
		let seconds = Math.round(value - minutes * 60)
			.toString()
			.padStart(2, '0');
		return `${minutes}:${seconds}`;
	}

	async function trackTime() {
		currentTime = await player.getCurrentTime();
		rafTimetracker = requestAnimationFrame(trackTime);
	}
</script>

<div class="video-container">
	<div class="videoId-input">
		Youtube id
		<input type="text" bind:value={youtubeId} />
	</div>
	{#if youtubeId}
		<div class="controls">
			<!-- <input type="number" bind:value={start} /> -->
			<Button on:click={() => (start = currentTime)}>
				start loop at {secondsToLabel(start || currentTime)}
			</Button>

			{#if start && stop}
				<Button on:click={() => ((start = 0), (stop = duration))}>reset</Button>
			{/if}

			<!-- <input type="number" bind:value={stop} /> -->
			<Button on:click={() => (stop = currentTime)}>
				stop loop at {secondsToLabel(stop === duration ? currentTime : stop)}
			</Button>
		</div>
	{/if}
	<div id="player" />
	<div class="video-controls" class:muted={isPlaying}>
		<MultiRange
			min={0}
			max={duration}
			bind:minValue={start}
			bind:maxValue={stop}
			label={secondsToLabel}
		/>
	</div>
</div>

{currentTime} | {start} | {stop}

<style lang="scss">
	.video-container {
		width: 80%;
		aspect-ratio: 16/9;
		margin: auto;
		position: relative;
		display: flex;
		flex-flow: column;
		gap: 2em;
	}
	.muted {
		opacity: 0.5;
	}
	.controls {
		font-size: 2em;
		display: flex;
		justify-content: space-between;
	}
	.videoId-input {
		text-align: center;
		font-size: 2em;

		input {
			font-size: inherit;
			text-align: center;
			animation: flyIn 0.2s ease-out;
			background-color: transparent;
			border: none;
			transition: border-width 0.2s ease, box-shadow 0.5s ease;
			border: 1px dotted var(--fgColor);
			border-style: dashed;
			box-shadow: none;
			color: var(--fgColor);

			&:focus {
				outline: none;
				border-width: 5px;
				box-shadow: 0 0 1em 0 red;
			}
		}
	}
	.video-controls {
		position: absolute;
		width: 100%;
		bottom: 2.6em;
	}
</style>

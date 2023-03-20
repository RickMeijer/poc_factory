<script lang="ts">
	import type { YouTubePlayer as YouTubePlayerType } from 'youtube-player/dist/types';
	import YouTubePlayer from 'youtube-player';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Button from '../components/Button.svelte';
	import MultiRange from '../components/MultiRange.svelte';

	let start: number;
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

	$: if (browser && start) sessionStorage.setItem('start', start.toString());
	$: if (browser && stop) sessionStorage.setItem('stop', stop.toString());

	onMount(() => {
		youtubeId = sessionStorage.getItem('youtubeId') || '';
		start = Number(sessionStorage.getItem('start')) || start;
		stop = Number(sessionStorage.getItem('stop')) || stop;

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
	function onYoutubeIdChange(e: KeyboardEvent) {
		const inputVal = (e.target as HTMLInputElement)?.value;
		console.log(inputVal);
		const regEx = new RegExp(
			/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]{11})(?:\S+)?$/
		);
		const youtubeIdMatch = inputVal.match(regEx);

		if (youtubeIdMatch && youtubeIdMatch.length) {
			youtubeId = youtubeIdMatch[1];
		}
	}
	// $: buttonLabel = !start ? 'start' : stop === duration ? 'stop' : 'reset';

	let buttonLabel = 'begin loop';
	function toggleLoop() {
		if (!start) {
			start = currentTime;
			buttonLabel = 'end loop';
		} else if (stop === duration) {
			stop = currentTime;
			buttonLabel = 'reset loop';
		} else {
			start = 0;
			stop = duration;
			buttonLabel = 'begin loop';
		}
	}
</script>

<div class="video-container">
	<div class="videoId-input">
		Youtube link or id:
		<input type="text" value={youtubeId} on:keydown={onYoutubeIdChange} />
	</div>
	<div id="player" />
	{#if youtubeId && currentTime > 0}
		<div class="controls">
			<Button on:click={toggleLoop}>
				{buttonLabel}
			</Button>
		</div>
	{/if}
	{#if start && stop}
		<div class="video-controls" class:muted={isPlaying}>
			<MultiRange
				min={0}
				max={duration}
				bind:minValue={start}
				bind:maxValue={stop}
				label={secondsToLabel}
			/>
		</div>
	{/if}
</div>

<style lang="scss">
	.video-container {
		width: 90%;
		margin: auto;
		position: relative;
		display: flex;
		flex-flow: column;
		gap: 2em;
	}
	#player {
		aspect-ratio: 16/9;
	}
	.muted {
		opacity: 0.5;
	}
	.controls {
		font-size: 2em;
		display: flex;
		justify-content: center;
	}
	.videoId-input {
		text-align: center;
		font-size: 2em;

		input {
			font-size: inherit;
			text-align: center;
			background-color: transparent;
			border: none;
			border-bottom: 1px dashed var(--fgColor);

			transition: border-width 0.2s ease, box-shadow 0.5s ease;
			color: var(--supportColor);

			&:focus {
				outline: none;
				border-width: 5px;
			}
		}
	}
	// .video-controls {
	// 	position: absolute;
	// 	width: 100%;
	// 	bottom: 2.6em;
	// }
</style>

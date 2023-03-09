<script lang="ts">
	import type { YouTubePlayer as YouTubePlayerType } from 'youtube-player/dist/types';
	import YouTubePlayer from 'youtube-player';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';

	let start: number;
	let stop: number;
	let youtubeId: string;

	let player: YouTubePlayerType;
	let currentTime = 0;
	let rafTimetracker: number;

	// Load youtube player
	$: if (browser && youtubeId) player.loadVideoById(youtubeId, start, '480');
	// Looping logic
	$: if (player && currentTime >= stop) player.seekTo(start, true);

	onMount(() => {
		player = YouTubePlayer('player', {
			height: '100%',
			width: '100%'
		});
		player.on('stateChange', async ({ data }) => {
			console.log('statechange', data);
			rafTimetracker && cancelAnimationFrame(rafTimetracker);
			// If playing, update currentTime var
			if (data === 1) rafTimetracker = requestAnimationFrame(trackTime);
		});
	});

	async function trackTime() {
		currentTime = await player.getCurrentTime();
		rafTimetracker = requestAnimationFrame(trackTime);
	}
	let hideInput = false;
</script>

<div class="videoId-input" class:videoId-input--hide={hideInput}>
	Paste youtube id here:
	<input type="text" bind:value={youtubeId} />
	<button on:click={() => (hideInput = true)}>Klik</button>
</div>

<div class="video-container">
	<div id="player" />
</div>
{#if youtubeId}
	<div>
		<input type="number" bind:value={start} />
		<button on:click={() => (start = currentTime)}>Start marker</button>
	</div>
	<div>
		<input type="number" bind:value={stop} />
		<button on:click={() => (stop = currentTime)}>Stop marker</button>
	</div>
{/if}

<style lang="scss">
	@keyframes flyIn {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(0%);
		}
	}
	.videoId-input {
		position: absolute;
		display: flex;
		flex-flow: column;
		gap: 1em;
		font-size: 8vw;
		align-items: center;
		justify-content: center;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		color: var(--fgColor);
		background: var(--bgColor);

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

		&--hide {
			bottom: auto;
			flex-flow: row;
			font-size: 1em;
			input {
				flex-grow: 0;
			}
		}
	}
	.video-container {
		width: 100%;
		aspect-ratio: 16/9;
		margin: auto;
	}
</style>

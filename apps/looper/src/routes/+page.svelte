<script lang="ts">
	import type { YouTubePlayer as YouTubePlayerType } from 'youtube-player/dist/types';
	import YouTubePlayer from 'youtube-player';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let start = 0;
	let stop = 0;
	let youtubeId = 'UprlV2kQo5A';

	let player: YouTubePlayerType;
	let currentTime = 0;
	let rafTimetracker: number;

	// Load youtube player
	$: if (browser && youtubeId) {
		player = YouTubePlayer('player');
		player.loadVideoById(youtubeId, start, '480');
	}
	// Looping logic
	$: if (player && currentTime >= stop) player.seekTo(start, true);

	onMount(() => {
		player.on('stateChange', async ({ data }) => {
			rafTimetracker && cancelAnimationFrame(rafTimetracker);
			// If playing, update currentTime var
			if (data === 1) rafTimetracker = requestAnimationFrame(trackTime);
		});
	});

	async function trackTime() {
		currentTime = await player.getCurrentTime();
		rafTimetracker = requestAnimationFrame(trackTime);
	}
</script>

<div id="player" />

<input type="text" bind:value={youtubeId} />
<div>
	<input type="number" bind:value={start} />
	<button on:click={() => (start = currentTime)}>Start marker</button>
</div>
<div>
	<input type="number" bind:value={stop} />
	<button on:click={() => (stop = currentTime)}>Stop marker</button>
</div>

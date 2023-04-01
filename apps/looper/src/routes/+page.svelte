<script lang="ts">
	import type { YouTubePlayer as YouTubePlayerType } from 'youtube-player/dist/types';
	import YouTubePlayer from 'youtube-player';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Button from '../components/Button.svelte';
	import MultiRange from '../components/MultiRange.svelte';
	import Looper from '../components/Icons/Looper.svelte';

	let start: number;
	let stop: number;
	let youtubeId: string;

	let player: YouTubePlayerType;
	let currentTime = 0;
	let rafTimetracker: number;
	let duration: number;
	let isPlaying = false;
	let error: number | null;

	$: if (browser && youtubeId) {
		localStorage.setItem('youtubeId', youtubeId);
		resetLoop();
		if (player) player.loadVideoById(youtubeId);
	}
	// Looping logic
	$: if ((player && currentTime >= stop) || currentTime <= start) {
		player.seekTo(start, true);
	}

	$: if (browser && start) localStorage.setItem('start', start.toString());
	$: if (browser && stop) localStorage.setItem('stop', stop.toString());

	onMount(() => {
		youtubeId = localStorage.getItem('youtubeId') || '';
		start = Number(localStorage.getItem('start')) || start;
		stop = Number(localStorage.getItem('stop')) || stop;

		player = YouTubePlayer('player', {
			height: '100%',
			width: '100%',
			playerVars: {
				modestbranding: 1,
				rel: 0,
				controls: 1,
				autoplay: 0
			}
		});
		player.on('error', async ({ data }) => {
			// 2 – The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.
			// 5 – The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.
			// 100 – The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.
			// 101 – The owner of the requested video does not allow it to be played in embedded players.
			// 150 – This error is the same as 101. It's just a 101 error in disguise!
			error = data;
		});
		player.on('stateChange', async ({ data }) => {
			rafTimetracker && cancelAnimationFrame(rafTimetracker);
			isPlaying = false;
			// Data === 1 means playing state
			// https://developers.google.com/youtube/iframe_api_reference
			if (data === 1) {
				error = null;
				isPlaying = true;
				rafTimetracker = requestAnimationFrame(trackTime);
				duration = duration || (await player.getDuration());
				// stop = stop || duration;
			}
			// if(data === -1)
		});
	});
	function resetLoop() {
		// Yolo typescript
		start = undefined as unknown as number;
		stop = undefined as unknown as number;
	}
	function secondsToLabel(value: number) {
		if (!value) return '';
		const minutes = Math.floor(value / 60);
		let seconds = Math.round(value - minutes * 60)
			.toString()
			.padStart(2, '0');
		return `${minutes}:${seconds}`;
	}
	function labelToSeconds(value: string) {
		if (!value) return 0;
		const time = value.split(':');
		const minutes = Number(time[0]) | 0;
		const seconds = Number(time[1]) | 0;

		return minutes * 60 + seconds;
	}

	async function trackTime() {
		currentTime = await player.getCurrentTime();
		rafTimetracker = requestAnimationFrame(trackTime);
	}

	function onYoutubeIdChange(e: KeyboardEvent) {
		const inputVal = (e.target as HTMLInputElement)?.value;
		if (inputVal.length === 11) {
			return inputVal;
		}
		const regEx = new RegExp(
			/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]{11})(?:\S+)?$/
		);
		const youtubeIdMatch = inputVal.match(regEx);
		if (youtubeIdMatch && youtubeIdMatch.length) {
			return youtubeIdMatch[1];
		}
		return '';
	}

	$: status = !start ? 'start' : !stop ? 'stop' : ('reset' as 'start' | 'stop' | 'reset');
	function toggleLoop() {
		if (!start) {
			start = currentTime;
		} else if (!stop) {
			stop = currentTime;
		} else {
			resetLoop();
		}
	}
</script>

<div class="video-container">
	<div class="videoId-input" class:red={error}>
		Paste Youtube link or id here:
		<input type="text" value={youtubeId} on:keydown={(e) => (youtubeId = onYoutubeIdChange(e))} />
	</div>
	<div class="video-controls">
		<MultiRange
			disabled={!(start && stop)}
			min={0}
			max={duration}
			bind:minValue={start}
			bind:maxValue={stop}
			label={secondsToLabel}
		/>
	</div>
	<div id="player" />
	{#if youtubeId && currentTime > 0}
		<div class="controls">
			<input
				type="text"
				value={secondsToLabel(start)}
				on:input={(e) => (start = labelToSeconds(e.target.value))}
			/>
			<div class="ble">
				<Button on:click={toggleLoop}>
					<Looper {status} />
				</Button>
			</div>
			<input
				type="text"
				value={secondsToLabel(stop)}
				on:input={(e) => (stop = labelToSeconds(e.target.value))}
			/>
		</div>
	{/if}
</div>

<style lang="scss">
	h1 {
		text-align: center;
	}
	.video-container {
		margin: 1em auto;
		position: relative;
		display: flex;
		flex-flow: column;
		gap: 2em;
		width: 80%;
	}
	.ble {
		display: flex;
		flex-flow: column-reverse;
		gap: 1em;
		align-items: center;
	}
	#player {
		aspect-ratio: 16/9;
	}
	.red {
		color: red;
	}
	.muted {
		opacity: 0.5;
	}
	.controls {
		font-size: 2em;
		display: flex;
		justify-content: center;
		gap: 2em;
		align-items: center;
		@media (max-width: 500px) {
			flex-flow: column;
		}
		input {
			color: white;
			max-width: 4em;
			width: 100%;
		}
	}
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
	.videoId-input {
		text-align: center;
		font-size: 1em;

		input {
			font-size: 2em;
			width: 100%;
		}
	}
	// .video-controls {
	// 	position: absolute;
	// 	width: 100%;
	// 	bottom: 2.6em;
	// }
</style>

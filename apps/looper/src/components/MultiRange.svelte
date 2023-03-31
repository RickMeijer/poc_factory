<script lang="ts">
	import { onMount } from 'svelte';

	export let min: number;
	export let max: number;
	export let minValue: number;
	export let maxValue: number;
	export let disabled = false;

	export let label = (value: number) => value.toString();

	export { className as class };
	let className = '';

	$: startPosition = `${(minValue / max) * 100}%`;
	$: stopPosition = `${100 - (maxValue / max) * 100}%`;

	let draggingStart: boolean;

	let trackElem: HTMLElement;
	let trackWidth: number;
	let trackOffset: number;
	let windowWidth: number;

	function updateValue(ev: PointerEvent) {
		const position = ev.pageX - trackOffset;
		const newValue = (position / trackWidth) * max;

		if (draggingStart && newValue < maxValue && newValue >= min) minValue = newValue;
		else if (newValue > minValue && newValue <= max) maxValue = newValue;
	}
	function startDrag(ev: PointerEvent) {
		ev.preventDefault();
		const dragElem = ev.currentTarget as HTMLElement;

		dragElem.setPointerCapture(ev.pointerId);
		draggingStart = dragElem?.classList.contains('start');
		dragElem.onpointermove = updateValue;
		dragElem.onpointerup = stopDrag;
	}
	function stopDrag(ev: PointerEvent) {
		const dragElem = ev.currentTarget as HTMLElement;
		dragElem.onpointermove = null;
		dragElem.onpointerup = null;
	}
	onMount(() => {
		const trackBBox = trackElem.getBoundingClientRect();
		trackWidth = trackBBox.width;
		trackOffset = trackBBox.left;
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="controls {className}" class:disabled>
	<div class="track" bind:this={trackElem} />
	<div class="selection" style:left={startPosition} style:right={stopPosition} />

	<div class="start" on:pointerdown={startDrag} style:left={startPosition}>
		<div class="valueLabel">{label(minValue)}</div>
		<button>]</button>
	</div>
	<div class="stop" on:pointerdown={startDrag} style:right={stopPosition}>
		<div class="valueLabel">{label(maxValue)}</div>
		<button>[</button>
	</div>
</div>

<style lang="scss">
	.controls {
		position: relative;
	}
	.disabled {
		pointer-events: none;
		opacity: 0.5;
	}
	.selection,
	.track {
		height: 5px;
		transform: translateY(50%);
		background: var(--fgColor);
	}
	.selection {
		position: absolute;
		background: var(--supportColor);
		left: 0;
		right: 0;
		top: 0;
	}
	button {
		cursor: pointer;
		color: var(--fgColor);
		background: transparent; //var(--fgColor);
		line-height: 1;
		border: none;
		border-radius: 100%;
		width: 2.5em;
		height: 2.5em;
	}
	.valueLabel {
		font-size: 0.6em;
		background: var(--fgColor);
		color: var(--bgColor);
		padding: 0.5em;
		position: absolute;
		bottom: calc(100% + 1em);
		left: 50%;
		transform: translateX(-50%);
		&:after {
			content: '';
			border: 0.5em solid transparent;
			border-top-color: var(--fgColor);
			position: absolute;
			top: 100%;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.start,
	.stop {
		touch-action: none;
		position: absolute;
		display: flex;
		flex-flow: column;
		transform: translateY(-50%);
		input {
			width: 4em;
			position: absolute;
			border: none;
			padding: 0.2em;
		}
		.valueLabel {
			opacity: 0;
			transition: opacity 0.5s ease;
		}
		&:hover .valueLabel,
		&:active .valueLabel {
			opacity: 1;
		}
	}
	.start {
		left: 0;
		transform: translateX(-50%) translateY(-50%);
	}
	.stop {
		right: 0;
		transform: translateX(50%) translateY(-50%);
	}
</style>

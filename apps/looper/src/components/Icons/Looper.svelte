<script lang="ts">
	export let status: 'start' | 'stop' | 'reset' = 'start';
	console.log(status);
</script>

<div class={status} />

<style lang="scss">
	div {
		aspect-ratio: 1/1;
		font-size: 2em;
		width: 1em;
		height: 1em;
		margin: 0.5em;
		transition: 0.1s ease-in;
		transition-property: border-radius, background;

		&:after,
		&:before {
			content: '';
			width: 0.3em;
			height: 1em;
			background: transparent;
			position: absolute;
			left: calc(50% - 0.15em);
			transition: 0.1s ease-in;
			transition-property: transform, background;
			transform-origin: center;
			transform: rotateZ(0deg);
		}
	}
	.start {
		border-radius: 50%;
		background: hsl(0, 100%, 40%);
		box-shadow: -1px -1px 1px hsl(0deg, 100%, 100%);
	}
	.stop {
		border-radius: 0;
		background: green;

		&:before,
		&:after {
			background: green;
		}
	}
	.reset {
		background: transparent;

		&:before,
		&:after {
			background: white;
		}
		&:before {
			transform: rotateZ(-45deg);
		}
		&:after {
			transform: rotateZ(45deg);
		}
	}
</style>

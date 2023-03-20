<script lang="ts">
	export let href = '';
	export let disabled = false;
	export { className as class };
	let className = '';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	{disabled}
	on:click
	on:keydown
	class={className}
>
	<slot />
</svelte:element>

<style lang="scss">
	button {
		font-size: 0.7em;
		padding: 0.4em 0.8em;
		border-radius: 3px;
		background: var(--bgColor);
		color: var(--fgColor);
		border: none;
		text-transform: uppercase;
		cursor: pointer;
		transform: scale(1);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		border-radius: 100%;
		aspect-ratio: 1/1;

		border-radius: 50%;

		$depression: 0.5em;
		box-shadow: $depression $depression $depression * 2 var(--bgColor-light),
			$depression * -1 $depression * -1 $depression * 2 var(--bgColor-dark);

		-webkit-tap-highlight-color: transparent;

		&[disabled] {
			opacity: 0.4;
			cursor: not-allowed;
		}

		&:active {
			$depression: 1em;
			box-shadow: $depression $depression $depression * 2 var(--bgColor-light),
				$depression * -1 $depression * -1 $depression * 2 var(--bgColor-dark);
			transform: scale(0.9);
		}
		&:hover {
			outline: none;

			// box-shadow: 0 0 1em var(--fgColor);
		}
	}

	// button {
	// 	padding: 15px 25px;
	// 	font-size: 24px;
	// 	text-align: center;
	// 	cursor: pointer;
	// 	outline: none;
	// 	color: #fff;
	// 	background-color: #04aa6d;
	// 	border: none;
	// 	border-radius: 15px;
	// 	box-shadow: 0 9px #999;
	// 	transition: transform 0.2s ease, box-shadow 0.2s ease;

	// 	-webkit-tap-highlight-color: none;

	// 	&:active {
	// 		background-color: #3e8e41;
	// 		box-shadow: 0 5px #666;
	// 		transform: translateY(4px);
	// 	}
	// }

	// button:hover {
	// 	background-color: #3e8e41;
	// }
</style>

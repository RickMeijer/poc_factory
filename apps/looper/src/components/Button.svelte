<script lang="ts">
	export let href = '';
	export let disabled = false;
</script>

<svelte:element this={href ? 'a' : 'button'} {href} {disabled} on:click on:keydown>
	<slot />
</svelte:element>

<style lang="scss">
	button {
		font-size: 0.7em;
		padding: 0.4em 0.8em;
		border-radius: 3px;
		background: var(--fgColor);
		color: var(--bgColor);
		border: none;
		text-transform: uppercase;
		cursor: pointer;
		transform: scale(1);
		transition: transform 0.2s ease;
		&[disabled] {
			opacity: 0.4;
			cursor: not-allowed;
		}

		&:hover {
			transform: scale(1.02);
		}
	}
</style>

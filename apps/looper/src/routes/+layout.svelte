<script lang="ts">
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	let theme: Writable<'light' | 'dark'> = writable();
	onMount(() => {
		let storedTheme: 'light' | 'dark' | null = localStorage.getItem('theme') as 'light' | 'dark';
		if (storedTheme) {
			$theme = storedTheme;
		} else {
			$theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
	});

	function toggleTheme() {
		$theme = $theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', $theme);
	}
</script>

<div class={`wrapper theme-${$theme}`}>
	<button on:click={toggleTheme}>Toggle theme {$theme}</button>
	<slot />
</div>

<style lang="scss">
	:global(body) {
		margin: 0;
	}
	.wrapper {
		display: flex;
		flex-flow: column;
		height: 100vh;

		font-family: sans-serif;
		background-color: var(--bgColor);
		color: var(--fgColor);
	}
	.theme-dark {
		--fgColor: white;
		--bgColor: black;
	}
	.theme-light {
		--fgColor: black;
		--bgColor: white;
	}

	button {
		position: absolute;
		z-index: 1;
		right: 1em;
	}
</style>

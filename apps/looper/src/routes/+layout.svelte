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

	$: themeToggle = $theme === 'dark' ? '☀️' : '🌛';
	function toggleTheme() {
		$theme = $theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', $theme);
	}
</script>

<div class={`wrapper theme-${$theme}`}>
	<button on:click={toggleTheme}>{themeToggle}</button>
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
		--bgColor: hsl(0, 0%, 10%);
		--bgColor-light: hsl(0, 0%, 20%);
		--bgColor-dark: hsl(0, 0%, 0%);

		--fgColor: hsl(0, 0%, 90%);
		--fgColor-light: hsl(0, 0%, 100%);
		--fgColor-dark: hsl(0, 0%, 50%);

		--supportColor: yellow;
	}
	.theme-light {
		--fgColor: hsl(0, 0%, 10%);
		--fgColor-light: hsl(0, 0%, 20%);
		--fgColor-dark: hsl(0, 0%, 0%);

		--bgColor: hsl(0, 0%, 90%);
		--bgColor-light: hsl(0, 0%, 50%);
		--bgColor-dark: hsl(0, 0%, 100%);

		--supportColor: #ffcc00;
	}

	button {
		position: absolute;
		z-index: 1;
		right: 0em;
		background: transparent;
		border: none;
		font-size: 2em;
	}
</style>

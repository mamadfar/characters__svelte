<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Optional route</title>
</svelte:head>

<h1>Optional Params ({data.lang})</h1>

<nav>
	<a href="/optional">English (/)</a>
	<a href="/optional/fr">French (/fr)</a>
	<a href="/optional/es">Spanish (/es)</a>
</nav>

<style>
	nav {
			display: flex;
			flex-direction: column;
			gap: 1rem;
	}
</style>
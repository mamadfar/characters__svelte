<svelte:head>
	<title>SvelteKit Training</title>
</svelte:head>

<h1>Advanced Layouts</h1>

<nav>
	<ul>
		<li>
			<a href="/about-character/dashboard">App Dashboard</a>
		</li>
		<li>
			<a href="https://kit.svelte.dev/docs/advanced-routing#advanced-layouts">More info regarding <b>segment and advance routing</b> - <u>(/about/story)</u></a>
		</li>
		<li>
			<a href="https://kit.svelte.dev/docs/advanced-routing#matching">More info regarding <b>Matchers</b> - <u>(/characters/[id=integer])</u></a>
		</li>
	</ul>
</nav>

<style>
	nav ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
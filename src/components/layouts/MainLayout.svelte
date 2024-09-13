<script lang="ts">
	import '../../routes/styles.scss';
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/about-character">About Character</a>
		<a href="/posts">Posts</a>
		<a href="/rest">Rest routing</a>
		<a href="/optional">Optional routing</a>
		<a href="/priority">Route Priority</a>
		<a href="/portfolio">Portfolio</a>
		<a href="/movie-log">Movie Log</a>
	</nav>
</header>

<main>
	<slot />
</main>

<style>
    main {
        max-width: 800px;
        margin: auto;
        padding: 1rem 2rem;
    }

    header {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        padding: 1rem 2rem;
    }

    nav {
        display: flex;
        align-items: center;
        font-size: 0.9rem;
    }

    nav > a {
        margin-right: 1rem;
    }
    nav > a:last-of-type {
        margin-right: 0;
    }
</style>
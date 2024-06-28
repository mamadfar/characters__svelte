<script lang="ts">
	import '../styles.scss';
</script>

<main>
	<slot />
</main>

<nav>
	<a href="/">Return to Website</a>
</nav>

<style>
    main {
        border: 10px solid rebeccapurple;
        padding: 2rem;
    }

    nav {
        text-align: right;
    }
</style>
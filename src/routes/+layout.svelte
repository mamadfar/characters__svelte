<script>
	import './styles.scss'
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/characters">Characters</a>
</nav>
<slot/>

<style lang="scss">
	nav {
		display: flex;
		gap: 1rem;
	}
</style>
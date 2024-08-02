<script>

	export let data

</script>

<div>
	{#each data.posts as post}
		<article>
			<a href={`/posts/${post.slug}`}>
				<h3>{post.title}</h3>
			</a>
			<p>{post.excerpt}</p>
		</article>
	{/each}
</div>

<style lang="scss">
	a {
		text-decoration: underline;
		color: unset;
	}
</style>
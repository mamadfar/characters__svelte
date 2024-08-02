<script>
	export let data
	$: post = data.post
</script>

<article>
	<h1>{post.title}</h1>
	<p>{post.content}</p>
</article>
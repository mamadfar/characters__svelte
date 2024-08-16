<script lang="ts">
	export let src = '';
	export let title = '';
	export let description = '';
	export let slug = '';
</script>

<a href={`/portfolio/${slug}`}>
	<div>
		<img src={src} alt="">
	</div>
	<div class="body">
		<h2>{title}</h2>
		<p>{description}</p>
	</div>
</a>

<style>
	a {
			border: 1px solid #ccc;
	}
	img {
			width: 100%;
			height: auto;
	}
	.body {
			padding: 1rem;
	}
</style>
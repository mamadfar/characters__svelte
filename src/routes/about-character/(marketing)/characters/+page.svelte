<script lang="ts">

	export let data;

	$: characters = data.characters;

</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<div>
	<h1>Characters</h1>
	<ul>
		{#each characters as {id, name, image, occupation}}
			<li>
				<a href={`/about-character/characters/${id}`} class="picture">
					<img src={image} alt={name}>
				</a>
				<div>
					<a href={`/about-character/characters/${id}`}><b>{name}</b></a>
					<p class="occupation">{occupation || 'Unknown'}</p>
				</div>
			</li>
			{/each}
	</ul>
</div>

<style lang="scss">
  li {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
  }
.picture {
		display: flex;
		height: 100px;
		width: 100px;
		&>img {
        height: 100%;
        width: 100%;
        object-fit: contain;
		}
}
.occupation {
		color: #666;
}
</style>
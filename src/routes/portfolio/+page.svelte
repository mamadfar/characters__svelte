<script lang="ts">
	import Card from '../../components/Card.svelte';

	export let data;

</script>

<div>
	<h1>My Portfolio</h1>
	<div class="flex">
		{#each data.projects as project}
			<Card title={project.title} description={project.description} slug={project.slug} src={project.image} />
		{/each}
	</div>
</div>

<style>
    .flex {
        display: flex;
        gap: 1rem;
    }
</style>
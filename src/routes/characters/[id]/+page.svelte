<script>
import Character from './Character.svelte';

export let data;

$: character = data.character

</script>

<svelte:head>
	<title>{character.name}</title>
</svelte:head>

<div>
	<h1>{character.name}</h1>
	<Character {...character}/>
</div>
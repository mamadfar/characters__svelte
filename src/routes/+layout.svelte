<script lang="ts">

	import MainLayout from '../components/layouts/MainLayout.svelte';

	export let data;
</script>

<div>
	{#if data.pathname.includes('/portfolio/')}
		<slot />
	{:else}
		<MainLayout>
			<slot />
		</MainLayout>
	{/if}
</div>
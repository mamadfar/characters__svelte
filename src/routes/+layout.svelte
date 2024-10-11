<script lang="ts">
import {page} from '$app/stores';
import MainLayout from '../components/layouts/MainLayout.svelte';

export let data
</script>

<div>
	{#if $page.url.pathname.includes('/portfolio/')}
		<slot />
	{:else}
		<MainLayout user={data.user}>
			<slot />
		</MainLayout>
	{/if}
</div>
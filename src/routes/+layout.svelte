<script lang="ts">
import {page} from '$app/stores';
import MainLayout from '../components/layouts/MainLayout.svelte';
</script>

<div>
	{#if $page.url.pathname.includes('/portfolio/')}
		<slot />
	{:else}
		<MainLayout>
			<slot />
		</MainLayout>
	{/if}
</div>
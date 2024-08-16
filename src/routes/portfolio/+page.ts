import type { Load } from '@sveltejs/kit';
import { getProjectSummaries } from '$lib';

export const load: Load = async () => {
	const projects = await getProjectSummaries();

	return {
			projects
	};
}
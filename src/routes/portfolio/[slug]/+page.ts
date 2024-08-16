import { getProjectBySlug } from '$lib';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({params}) => {
	const {slug} = params;
	console.log(slug);
	if (slug) {
		const project = await getProjectBySlug(slug);
		return {
			project
		}
	}
	throw new Error('No slug provided');
}
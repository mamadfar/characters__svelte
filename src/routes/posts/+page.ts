import type { Load } from '@sveltejs/kit';
import { getPostSummaries } from '../../lib';

export const load: Load = async () => {
	const posts = await getPostSummaries();

	return {
		posts
	};
};
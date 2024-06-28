import { error, type Load } from '@sveltejs/kit';

export const load: Load = async () => {
	throw error(404, 'There was no mission!')
}
import { error, type Load } from '@sveltejs/kit';

export const load: Load = async () => {
	//? Commented because in the build time, the compiler will throw an error
	// throw error(404, 'There was no mission!')
}
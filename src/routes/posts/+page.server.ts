import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({fetch}) => {
	const res = await fetch('/api/posts')

	if (!res.ok) {
		throw error(res.status, res.statusText)
	}

	return {
		posts: await res.json()
	};
};
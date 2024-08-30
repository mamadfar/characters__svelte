import { error, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({fetch, params}) => {
	const {slug} = params

	if (slug) {
		const res = await fetch(`/api/posts/${slug}`)

		if (!res.ok) {
			throw error(res.status, res.statusText)
		}

		return {
			post: await res.json()
		};
	} else {
		throw error(404, 'Post not found')
	}
}
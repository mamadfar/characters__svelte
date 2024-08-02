import { error, type Load } from '@sveltejs/kit';
import { getPostBySlug } from '$lib';
import type { IPost } from '../../../types/Post.type';

export const load: Load = async ({params}): Promise<{post: IPost}> => {
	const {slug} = params
	if (slug) {
		const post = await getPostBySlug(slug)
		return {
			post
		}
	} else {
		throw error(404, 'Post not found')
	}
}
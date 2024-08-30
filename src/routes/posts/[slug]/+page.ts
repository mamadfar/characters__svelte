// import { error, type Load } from '@sveltejs/kit';
// import type { IPost } from '../../../types/Post.type';
// import { getPostBySlug } from '$lib';
//
// export const load: Load = async ({params}): Promise<{post: IPost}> => {
// 	const {slug} = params
//
//? Old code
// 	if (slug) {
// 		const post = await getPostBySlug(slug)
// 		return {
// 			post
// 		}
// 	} else {
// 		throw error(404, 'Post not found')
// 	}
// }
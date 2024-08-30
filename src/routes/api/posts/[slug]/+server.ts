import { API_URL, SECRET_POSTS_TOKEN } from '$env/static/private';

export const GET = async (event) => {

	const { slug } = event.params;

	const response = await fetch(`${API_URL}/posts/${slug}`, {
		headers: {
			'Authorization': `${SECRET_POSTS_TOKEN}`
		}
	});

	return new Response(response.body)
}
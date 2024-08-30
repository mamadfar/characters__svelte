import { API_URL } from '$env/static/private';

export const GET = async (event) => {

	const response = await fetch(`${API_URL}/bobs-burgers/characters`)

	return new Response(response.body)
}
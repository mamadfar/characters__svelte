import { API_URL } from '$env/static/private';

export const GET = async ({params}) => {
	const { id } = params

	const response = await fetch(`${API_URL}/bobs-burgers/characters/${id}`)

	return new Response(response.body)
}
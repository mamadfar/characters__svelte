import { error, json } from '@sveltejs/kit';

export const POST = async ({request, cookies}) => {
	const {username, password} = await request.json();

	if (username === 'mamad' && password === 'bebe') {
		cookies.set('session', username, {
			path: '/',
			maxAge: 60 * 60 * 24 * 7
		})
		return json({message: 'Logged in'}, {status: 200})
	}
	throw error(401, {message: 'Invalid username or password'})
}
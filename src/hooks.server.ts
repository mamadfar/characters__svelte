import type { Handle, HandleFetch } from '@sveltejs/kit';

const getUserInfo = async (session: string) => {
	return {
		name: session
	};
};

export const handle: Handle = async ({ event, resolve }) => {

	const session = event.cookies.get('session');

	if (session) {
		const user = await getUserInfo(session);
		event.locals.user = user.name;
	}


	return resolve(event);
};

export const handleFetch: HandleFetch = async ({ fetch, request }) => {

	return fetch(request);
}
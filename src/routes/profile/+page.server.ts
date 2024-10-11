import { type Actions, redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ locals }) => {
	if (!locals.user) {
		redirect(303, '/login');
	}
}

export const actions: Actions = {
	async logout({ cookies, locals }) {
		cookies.delete('session', {
			path: '/'
		});
		locals.user = '';
	redirect(303, '/');
	}
}
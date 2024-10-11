export const prerender = false;

import { type Actions, fail, redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ cookies, locals }) => {
	const session = cookies.get('session');
	if (session) {
		locals.user = session;
		return redirect(302, '/posts');
	}
};

const validateLogin = (loginData: { username: string; password: string }) => {
	if (!loginData.username) {
		return { success: false, username: { error: 'Username is required', value: loginData.username } };
	}
	if (!loginData.password) {
		return {
			success: false,
			password: { error: 'Password is required', value: loginData.password },
			username: { value: loginData.username }
		};
	}
	return { success: true };
};

export const actions: Actions = {
	async default({ request, fetch, locals }) {
		try {
			const formData = await request.formData();
			const username = formData.get('username') as string;
			const password = formData.get('password') as string;
			const validation = validateLogin({ username, password });
			if (!validation.success) {
				return fail(404, validation);
			}
			const res = await fetch('/api/login', {
				method: 'POST',
				body: JSON.stringify({ username, password })
			});
			if (res.ok) {
				locals.user = username;
				redirect(303, '/posts');
			} else {
				const data = await res.json();
				return fail(res.status, {
					username: { value: username, error: data.message },
					password: { value: password, error: data.message }
				});
			}
		} catch (_error) {
			return fail(500, { error: 'Something went wrong!' });
		}
	}
};
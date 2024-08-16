import type { LayoutLoad } from '../../.svelte-kit/types/src/routes/about-character/(app)/$types';

export const load: LayoutLoad = async ({url}) => {
	const {pathname} = url;
	return {
		pathname
	}
}
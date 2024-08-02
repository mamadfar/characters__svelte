import type { Load } from '@sveltejs/kit';
import type { ICharacter } from '../../types/Character.type';
import {env as PublicEnv} from "$env/dynamic/public"

export const load: Load = async ({fetch}) => {

	const response = await fetch(`${PublicEnv.PUBLIC_API_URL}/characters`)
	const characters: Pick<ICharacter, 'id' | 'name' | 'image' | 'occupation'>[] = await response.json()

	return {
			characters
	}
}
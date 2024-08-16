import type { Load } from '@sveltejs/kit';
import type { ICharacter } from '../../../../types/Character.type';
import {PUBLIC_API_URL} from "$env/static/public"

export const load: Load = async ({fetch}) => {

	const response = await fetch(`${PUBLIC_API_URL}/characters`)
	const characters: Pick<ICharacter, 'id' | 'name' | 'image' | 'occupation'>[] = await response.json()

	return {
			characters
	}
}
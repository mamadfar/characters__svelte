import type { Load } from '@sveltejs/kit';
import type { ICharacter } from '../../../../types/Character.type';

export const load: Load = async ({fetch}) => {

	const response = await fetch(`/api/characters`)
	const characters: Pick<ICharacter, 'id' | 'name' | 'image' | 'occupation'>[] = await response.json()

	return {
			characters
	}
}
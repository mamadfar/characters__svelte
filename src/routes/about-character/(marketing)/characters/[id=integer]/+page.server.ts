import { error, type Load } from '@sveltejs/kit';
import type { ICharacter } from '../../../../../types/Character.type';

export const load: Load = async ({fetch, params}) => {
	const {id} = params
	const response = await fetch(`/api/characters/${id}`)

	if (!response.ok) {
		const err = await response.json();
		throw error(response.status, err.message)
	}
	const character: ICharacter = await response.json()

	return {
		character
	}
}
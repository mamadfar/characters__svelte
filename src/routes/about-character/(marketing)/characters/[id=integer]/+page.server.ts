import { error, type Load } from '@sveltejs/kit';
import type { ICharacter } from '../../../../../types/Character.type';
import {API_URL} from "$env/static/private"

export const load: Load = async ({fetch, params}) => {
	const {id} = params
	const response = await fetch(`${API_URL}/characters/${id}`)

	if (!response.ok) {
		const err = await response.json();
		throw error(response.status, err.message)
	}
	const character: ICharacter = await response.json()

	return {
		character
	}
}
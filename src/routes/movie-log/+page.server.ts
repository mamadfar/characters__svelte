export const prerender = false;

import type { PageServerLoad } from './$types';
import { type Actions, fail } from '@sveltejs/kit';

type Movie = {
	id: string;
	name: string;
	release: number;
	rating: number;
	comment?: string;
};

let movies: Movie[] = [
	{
		id: 'df5105ff-9d87-4bd9-be62-4743c0a243b9',
		name: 'Everything Everywhere All at Once',
		release: 2022,
		rating: 5,
		comment: `Unlike anything I have ever seen before. I loved it!`
	},
	{
		id: '446e2ae1-5cc4-4b84-9ea0-1e77428e46f6',
		name: 'The Shawshank Redemption',
		release: 1994,
		rating: 5,
		comment: 'Amazing, if a little over-hyped'
	}
];

export const load: PageServerLoad = () => {
	return {
		movies
	};
};

const validateMovie = (movieData: Partial<Movie>): { success: false; error: string } | {
	success: true;
	movie: Omit<Movie, 'id'>
} => {
	if (!movieData.name) {
		return { success: false, error: 'Name of the movie is required' };
	}
	if (!movieData.release) {
		return { success: false, error: 'Release year of the movie is required' };
	}
	if (!movieData.rating) {
		return { success: false, error: 'Rating of the movie is required' };
	}
	if (movieData.rating < 1 || movieData.rating > 5) {
		return { success: false, error: 'Rating of the movie must be between 1 and5' };
	}
	return { success: true, movie: movieData as Omit<Movie, 'id'> };
};

export const actions: Actions = {
	async logMovie({ request }) {
		const formData = await request.formData();
		const movie = {
			name: (formData.get('name') ?? '') as string,
			release: (formData.get('release') ?? Number(formData.get('release'))) as number,
			rating: (formData.get('rating') ?? Number(formData.get('rating'))) as number,
			comment: (formData.get('comment') ?? '') as string
		};
		const validation = validateMovie(movie);

		movies.push({
			...movie,
			id: crypto.randomUUID()
		})

		if (!validation.success) {
			return fail(400, {error: validation.error, ...movie} );
		}
		// throw redirect(303, '/movie-log'); //? after form validation, the status code is 303
	},
	async deleteMovie({request}) {
		const movieId = (await request.formData()).get('movieToDelete');
		movies = movies.filter(movie => movie.id !== movieId);
		// throw redirect(303, '/movie-log');
	}
};
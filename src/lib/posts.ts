import db from './db.json';
import type { IPost } from '../types/Post.type';

//? This function is a mock of a fetch from a database with random delay
const fetchFromDB = async () => {
	return new Promise<IPost[]>((resolve) => setTimeout(() => resolve(db), Math.random() * 1000 + 500))
};

export async function getPostSummaries() {
	const posts = await fetchFromDB();
	return posts.map((p) => ({
		slug: p.slug,
		title: p.title,
		excerpt: p.excerpt
	}));
}

export async function getPostBySlug(slug: string) {
	const posts = await fetchFromDB();
	return posts.find((p) => p.slug === slug) as IPost;
}

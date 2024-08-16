import db from './db.json';
import type { IProject } from '../../types/Project.type';

//? This function is a mock of a fetch from a database with random delay
const fetchFromDB = async () => {
	return new Promise<IProject[]>((resolve) => setTimeout(() => resolve(db), Math.random() * 1000 + 500))
};

export async function getProjectSummaries() {
	const projects = await fetchFromDB();
	return projects.map((p) => ({
		slug: p.slug,
		title: p.title,
		description: p.description,
		image: p.image,
	}));
}

export async function getProjectBySlug(slug: string) {
	const projects = await fetchFromDB();
	return projects.find((p) => p.slug === slug) as IProject;
}

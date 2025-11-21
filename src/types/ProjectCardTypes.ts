import type { ImageMetadata } from 'astro';

export type ProjectCardTypes = {
	titulo: string;
	tags: string[];
	text: string;
	buttonText: string;
	image: ImageMetadata;
	buttonLink: string;
};

export type ProjectsPageCardTypes = {
	title: string;
	text?: string;
	image: ImageMetadata;

	order: number;
};

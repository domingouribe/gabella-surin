import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        location: z.string(),
        description: z.string(),
        link: z.string().url(),
        image: z.string(),
        category: z.string(),
    }),
});

export const collections = {
    'projects': projectsCollection,
};

import { defineCollection, z } from "astro:content";
const teamCollection = defineCollection({
    schema: z.object({
        name: z.string(),
        role: z.string(),
        image: z.string(),
        altImage: z.string(),
        description: z.string(), // Markdown string
    }),
});

export const collections = {
    team: teamCollection,
};
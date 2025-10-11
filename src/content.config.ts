import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    metaTitle: z.string(),
    title: z.string(),
    description: z.string(),
    complement: z.string(),
    img: z.string(),
    published: z.date(),
    modified: z.date(),
    minutesToRead: z.number()
  })
})

export const collections = { blog }

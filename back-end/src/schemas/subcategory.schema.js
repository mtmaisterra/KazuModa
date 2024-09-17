import { z } from 'zod';

export const subCategorySchema = z.object({
  subcategory: z.string().min(3).nonempty({
    message:
      'The subcategory field is required and must contain at least 3 characters.',
  }),
  image_url: z.string().optional(),
});

import { z } from 'zod';

export const categorySchema = z.object({
  category: z.string().min(3).nonempty({
    message:
      'The category field is required and must contain at least 3 characters.',
  }),
  image_url: z.string().optional(),
});

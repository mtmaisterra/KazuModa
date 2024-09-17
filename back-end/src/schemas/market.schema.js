import { z } from 'zod';

export const marketSchema = z.object({
  marketname: z.string().min(3).nonempty({
    message:
      'The marketname field is required and must contain at least 3 characters.',
  }),
  description: z.string().optional(),
  logo_url: z.string().url().optional(),
  banner_url: z.string().url().optional(),
  products: z.array(z.string()).optional(),
});

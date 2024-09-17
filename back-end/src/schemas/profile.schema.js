import { z } from 'zod';

export const profileSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Please complete this field' })
    .email({ message: 'Invalid email' }),
  avatar_url: z.string().optional(),
  zip_code: z.number().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  street_1: z.string().optional(),
  street_2: z.string().optional(),
  number: z.number().optional(),
  status: z
    .number()
    .transform((value) => Number(value))
    .refine((value) => value === 0 || value === 1, {
      message: 'Status must be 0 or 1',
    }),
});

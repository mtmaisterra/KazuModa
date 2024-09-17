import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().nonempty({ message: 'Email is required' }).email({
    message: 'Invalid email',
  }),
  password: z
    .string()
    .nonempty({ message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      }
    ),
});

export const loginSchema = z.object({
  email: z.string().nonempty({ message: 'Email is required' }).email({
    message: 'Email is not valid',
  }),
  password: z
    .string()
    .nonempty({ message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' }),
});

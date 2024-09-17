import { z } from 'zod';

export const ProductSchema = z.object({
  product_status: z.enum(['pendiente', 'enviado', 'recibido', 'cancelado']),
  productname: z.string().nonempty({
    message: 'Product name is required',
  }),
  description: z.string().nonempty({
    message: 'Description is required',
  }),
  image_url: z.string().optional(),
  color: z.string().optional(),
  brand: z.string().optional(),
  price: z.number().nonnegative(),
  discount: z.number().positive().optional(),
});

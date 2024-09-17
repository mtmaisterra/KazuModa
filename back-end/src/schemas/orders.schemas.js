import { z } from 'zod';

const orderItemsSchema = z.object({
  userId: z.string(),
  productId: z.string(),
});

const orderStatusSchema = z.object({
  orderStatus: z.string(),
});

const ordersShema = z.object({
  market_id: z.string(),
  order_item_id: z.string(),
  order_status_id: z.string(),
});

export { orderItemsSchema, ordersShema, orderStatusSchema };

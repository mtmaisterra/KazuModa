import {
  orderItemsDelete,
  orderItemsGet,
  orderItemsPost,
  orderItemsPut,
} from '../controllers/order.items.controllers.js';

import { Router } from 'express';

const router = Router();

router.get('/', orderItemsGet);
router.post('/:id', orderItemsPost);
router.put('/:id', orderItemsPut);
router.delete('/:id', orderItemsDelete);

export { router };

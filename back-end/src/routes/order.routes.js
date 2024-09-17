import { Router } from 'express';
import {
  ordersDelete,
  ordersGet,
  ordersGetID,
  ordersPost,
  ordersPut,
} from '../controllers/order.controllers.js';

const router = Router();

router.get('/', ordersGet);
router.get('/:id', ordersGetID);
router.post('/id', ordersPost);
router.put('/:id', ordersPut);
router.delete('/:id', ordersDelete);

export { router };

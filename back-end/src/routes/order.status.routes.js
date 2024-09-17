import {
  orderStatusDelete,
  orderStatusGet,
  orderStatusGetID,
  orderStatusPost,
  orderStatusPut,
} from '../controllers/order.status.controllers.js';

import { Router } from 'express';

const router = Router();

router.get('/', orderStatusGet);
router.get('/:id', orderStatusGetID);
router.post('/', orderStatusPost);
router.put('/:id', orderStatusPut);
router.delete('/:id', orderStatusDelete);

export { router };

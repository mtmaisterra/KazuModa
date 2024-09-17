import { Router } from 'express';
import {
  getMarket,
  createMarket,
  updateMarket,
  deleteMarket,
} from '../controllers/market.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { isUser } from '../middlewares/validateRole.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { marketSchema } from '../schemas/market.schema.js';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Market:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Market ID
 *         user_id:
 *           type: string
 *           description: User ID associated with the market
 *         marketname:
 *           type: string
 *           description: Name of the market
 *         description:
 *           type: string
 *           description: Description of the market
 *         logo_url:
 *           type: string
 *           description: URL of the market's logo
 *         banner_url:
 *           type: string
 *           description: URL of the market's banner
 *       required:
 *         - user_id
 *         - marketname
 */

/**
 * @swagger
 * /api/v1/market/{marketId}:
 *   get:
 *     summary: Get a market by ID
 *     tags: [Market]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: marketId
 *         required: true
 *         description: ID of the market to fetch
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Market found
 *       '401':
 *         description: Unauthorized - Token is missing or invalid
 */
router.get('/market/:id', authRequired, isUser, getMarket);

/**
 * @swagger
 * /api/v1/market:
 *   post:
 *     summary: Create a new market
 *     tags: [Market]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Market'
 *     responses:
 *       '200':
 *         description: Market created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Market'
 */
router.post(
  '/market',
  authRequired,
  validateSchema(marketSchema.pick(['user_id', 'marketname'])),
  isUser,
  createMarket
);

/**
 * @swagger
 * /api/v1/market/{marketId}:
 *   put:
 *     summary: Update a market by ID
 *     tags: [Market]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: marketId
 *         required: true
 *         description: ID of the market to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Market'
 *     responses:
 *       '200':
 *         description: Market updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Market'
 *   delete:
 *     summary: Delete a market by ID
 *     tags: [Market]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: marketId
 *         required: true
 *         description: ID of the market to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Market deleted successfully
 */
router.put(
  '/market/:id',
  authRequired,
  validateSchema(
    marketSchema.pick(['marketname', 'description', 'logo_url', 'banner_url'])
  ),
  isUser,
  updateMarket
);

router.delete('/market/:id', authRequired, isUser, deleteMarket);

export default router;

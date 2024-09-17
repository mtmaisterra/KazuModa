/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication endpoints
 */

import { Router } from 'express';
import {
  register,
  login,
  logout,
  verifyToken,
} from '../controllers/auth.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';

const router = Router();

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad request
 */
router.post('/register', validateSchema(registerSchema), register);

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad request
 */
router.post('/login', validateSchema(loginSchema), login);

/**
 * @swagger
 * /api/v1/logout:
 *   post:
 *     summary: Logout
 *     tags: [Authentication]
 *     responses:
 *       '200':
 *         description: OK
 */
router.post('/logout', logout);

/**
 * @swagger
 * /api/v1/verify:
 *   get:
 *     summary: Verify token
 *     tags: [Authentication]
 *     responses:
 *       '200':
 *         description: OK
 *       '401':
 *         description: Unauthorized - Token is missing or invalid
 */
router.get('/verify', verifyToken);

export default router;

import { Router } from 'express';
import {
  profile,
  updateProfileById,
  deleteProfileById,
} from '../controllers/profile.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { isAdmin, isSeller, isUser } from '../middlewares/validateRole.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { profileSchema } from '../schemas/profile.schema.js';

const router = Router();

/**
 * @swagger
 * /api/v1/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '401':
 *         description: Unauthorized - Token is missing or invalid
 */
router.get('/profile', authRequired, isUser, profile);

/**
 * @swagger
 * /api/v1/profile/{userId}:
 *   put:
 *     summary: Update user profile by ID
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserUpdate'
 *     responses:
 *       '200':
 *         description: Profile updated successfully
 *       '400':
 *         description: Bad request - Invalid data provided
 *       '401':
 *         description: Unauthorized - Token is missing or invalid
 *   delete:
 *     summary: Delete user profile by ID
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Profile deleted successfully
 *       '401':
 *         description: Unauthorized - Token is missing or invalid
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: User ID
 *         roles:
 *           type: array
 *           description: Role ID
 *         name:
 *           type: string
 *           description: User's name
 *         email:
 *           type: string
 *           format: email
 *           description: User's email
 *         avatar_url:
 *           type: string
 *           description: URL of user's avatar
 *         zip_code:
 *           type: number
 *           description: User's zip code
 *         state:
 *           type: string
 *           description: User's state
 *         city:
 *           type: string
 *           description: User's city
 *         street_1:
 *           type: string
 *           description: User's street address 1
 *         street_2:
 *           type: string
 *           description: User's street address 2
 *         number:
 *           type: number
 *           description: User's house number
 *         status:
 *           type: number
 *           description: User's status (0 or 1)
 */

router.put(
  '/profile/:userId',
  authRequired,
  isUser,
  validateSchema(profileSchema),
  updateProfileById
);

router.delete('/profile/:userId', authRequired, isUser, deleteProfileById);

export default router;

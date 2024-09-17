import { getSubcategories, getSubcategoryById, createSubcategory, updateSubcategory, deleteSubcategory } from '../controllers/subcategory.controller.js';
import express from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { isUser } from '../middlewares/validateRole.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { subCategorySchema } from '../schemas/subcategory.schema.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     SubCategory:
 *       type: object
 *       properties:
 *         subcategory:
 *           type: string
 *           description: Name of the subcategory
 *         image_url:
 *           type: string
 *           description: URL from image
 *       required:
 *         - subcategory
 */

/**
 * @swagger
 * /api/v1/subcategories:
 *   get:
 *     summary: Get all subcategories
 *     tags: [SubCategories]
 *     responses:
 *       '200':
 *         description: A list of subcategories
 *       '404':
 *         description: No subcategories found
 *       '500':
 *         description: Internal Server Error
 */
 router.get('/subcategories', getSubcategories);

/**
 * @swagger
 * /api/v1/subcategories/{id}:
 *   get:
 *     summary: Get a subcategory by ID
 *     tags: [SubCategories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the subcategory to fetch
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: SubCategory found
 *       '401':
 *         description: Unauthorized - Token is missing or invalid
 */
 router.get('/subcategories/:id', authRequired, isUser, getSubcategoryById);

 /**
  * @swagger
  * /api/v1/subcategories:
  *   post:
  *     summary: Create a new subcategory
  *     tags: [SubCategories]
  *     security:
  *       - bearerAuth: []
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/SubCategory'
  *     responses:
  *       '200':
  *         description: SubCategory created successfully
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/SubCategory'
  */
 router.post(
   '/subcategories',
   authRequired,
   validateSchema(subCategorySchema.pick(['subcategory', 'image_url'])),
   isUser,
   createSubcategory
 );
 
 /**
  * @swagger
  * /api/v1/subcategories/{id}:
  *   put:
  *     summary: Update a subcategory by ID
  *     tags: [SubCategories]
  *     security:
  *       - bearerAuth: []
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         description: ID of the subcategory to update
  *         schema:
  *           type: string
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/SubCategory'
  *     responses:
  *       '200':
  *         description: SubCategory updated successfully
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/SubCategory'
  *   delete:
  *     summary: Delete a subcategory by ID
  *     tags: [SubCategories]
  *     security:
  *       - bearerAuth: []
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         description: ID of the subcategory to delete
  *         schema:
  *           type: string
  *     responses:
  *       '204':
  *         description: SubCategory deleted successfully
  */
 router.put(
   '/subcategories/:id',
   authRequired,
   validateSchema(
     subCategorySchema.pick(['subcategory', 'image_url'])
   ),
   isUser,
   updateSubcategory
 );
 
 router.delete('/subcategories/:id', authRequired, isUser, deleteSubcategory);

export default router;
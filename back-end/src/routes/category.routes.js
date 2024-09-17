import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controllers/category.controller.js';
import express from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { isUser } from '../middlewares/validateRole.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { categorySchema } from '../schemas/category.schema.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         category:
 *           type: string
 *           description: Name of the category
 *         image_url:
 *           type: string
 *           description: URL from image
 *         subcategories:
 *           type: string
 *           description: SubCategory ID associated with the category
 *       required:
 *         - category
 *         - subcategories
 */

/**
 * @swagger
 * /api/v1/categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       '200':
 *         description: A list of categories
 *       '404':
 *         description: No categories found
 *       '500':
 *         description: Internal Server Error
 */
 router.get('/categories', getCategories);

/**
 * @swagger
 * /api/v1/categories/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to fetch
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Category found
 *       '401':
 *         description: Unauthorized - Token is missing or invalid
 */
 router.get('/categories/:id', authRequired, isUser, getCategoryById);

 /**
  * @swagger
  * /api/v1/categories:
  *   post:
  *     summary: Create a new category
  *     tags: [Categories]
  *     security:
  *       - bearerAuth: []
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Category'
  *     responses:
  *       '200':
  *         description: Category created successfully
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Category'
  */
 router.post(
   '/categories',
   authRequired,
   validateSchema(categorySchema.pick(['category', 'image_url'])),
   isUser,
   createCategory
 );
 
 /**
  * @swagger
  * /api/v1/categories/{id}:
  *   put:
  *     summary: Update a category by ID
  *     tags: [Categories]
  *     security:
  *       - bearerAuth: []
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         description: ID of the category to update
  *         schema:
  *           type: string
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Category'
  *     responses:
  *       '200':
  *         description: Category updated successfully
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Category'
  *   delete:
  *     summary: Delete a category by ID
  *     tags: [Categories]
  *     security:
  *       - bearerAuth: []
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         description: ID of the category to delete
  *         schema:
  *           type: string
  *     responses:
  *       '204':
  *         description: Category deleted successfully
  */
 router.put(
   '/categories/:id',
   authRequired,
   validateSchema(
     categorySchema.pick(['category', 'image_url'])
   ),
   isUser,
   updateCategory
 );
 
 router.delete('/categories/:id', authRequired, isUser, deleteCategory);

export default router;
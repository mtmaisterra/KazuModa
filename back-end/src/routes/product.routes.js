import { Router } from 'express';
import {
  products,
  createProduct,
  getProductById,
  filterProducts,
  updateProductById,
  deleteProductById,
} from '../controllers/product.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { isAdmin, isSeller, isUser } from '../middlewares/validateRole.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { ProductSchema } from '../schemas/product.schema.js';

const router = Router();

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: A list of products
 *       '404':
 *         description: No products found
 *       '500':
 *         description: Internal Server Error
 */
router.get('/products', products);

/**
 * @swagger
 * /api/v1/product/{productId}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID of the product to fetch
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Product found
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal Server Error
 */
router.get('/product/:productId', getProductById);

/**
 * @swagger
 * /api/v1/products/search:
 *   get:
 *     summary: Filter products by category, subcategory, or size
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Name of the category to filter by
 *       - in: query
 *         name: subcategory
 *         schema:
 *           type: string
 *         description: Name of the subcategory to filter by
 *       - in: query
 *         name: size
 *         schema:
 *           type: string
 *         description: Name of the size to filter by
 *     responses:
 *       '200':
 *         description: Filtered products
 *       '404':
 *         description: No products found
 *       '500':
 *         description: Internal Server Error
 */
router.get('/products/search', filterProducts);

/**
 * @swagger
 * /api/v1/product:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '201':
 *         description: Product created successfully
 *       '500':
 *         description: Internal Server Error
 */
router.post(
  '/product',
  authRequired,
  isUser,
  validateSchema(ProductSchema),
  createProduct
);

/**
 * @swagger
 * /api/v1/product/{productId}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID of the product to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '200':
 *         description: Product updated successfully
 *       '500':
 *         description: Internal Server Error
 */
router.put(
  '/product/:productId',
  authRequired,
  isUser,
  validateSchema(ProductSchema),
  updateProductById
);

/**
 * @swagger
 * /api/v1/product/{productId}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID of the product to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Product deleted successfully
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal Server Error
 */
router.delete('/product/:productId', authRequired, isUser, deleteProductById);

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         market_id:
 *           type: string
 *           description: ID of the market where the product belongs
 *         category_name:
 *           type: string
 *           description: Name of the category for the product
 *         subcategory_name:
 *           type: string
 *           description: Name of the subcategory for the product
 *         size_name:
 *           type: string
 *           description: Name of the size for the product
 *         product_status:
 *           type: string
 *           enum: [pendiente, enviado, recibido, cancelado]
 *           description: Status of the product
 *         productname:
 *           type: string
 *           description: Name of the product
 *         description:
 *           type: string
 *           description: Description of the product
 *         image_url:
 *           type: string
 *           description: URL of the product image
 *         color:
 *           type: string
 *           description: Color of the product
 *         brand:
 *           type: string
 *           description: Brand of the product
 *         price:
 *           type: number
 *           description: Price of the product
 *         discount:
 *           type: number
 *           description: Discount percentage for the product
 *       required:
 *         - market_id
 *         - category_name
 *         - subcategory_name
 *         - size_name
 *         - productname
 *         - description
 *         - price
 */

export default router;

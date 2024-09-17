import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import pkg from '../package.json' assert { type: 'json' };
import cookieParser from 'cookie-parser';

// Import swagger config
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swaggerConfig.js';

// Import functions for autocomplete tables and data initial setup
import { initialData } from './libs/initialSetup.js';

// Import routes
import authRoutes from './routes/auth.routes.js';
import profileRoutes from './routes/profile.routes.js';
import marketRoutes from './routes/market.routes.js';
import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js';
import subcategoryRoutes from './routes/subcategory.routes.js';
import { router as routerOrders } from './routes/order.routes.js';
import { router as routerOrderStatus } from './routes/order.status.routes.js';
import { router as routerOrdersItems } from './routes/order.items.routes.js';

const app = express();
dotenv.config();

const BASE_CLIENT_URI = process.env.BASE_CLIENT_URI || 'http://localhost:3000';

app.use(
  cors({
    credentials: true,
    origin: `${BASE_CLIENT_URI}`,
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Load data necessary to use the application
initialData();

// Set response for "/" route
app.set('pkg', pkg);
app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  });
});

// Route definitions
app.use('/api/v1', authRoutes);
app.use('/api/v1', profileRoutes);
app.use('/api/v1', categoryRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', subcategoryRoutes);
app.use('/api/v1', marketRoutes);
app.use('/api/v1/orders', routerOrders);
app.use('/api/v1/orderStatus', routerOrderStatus);
app.use('/api/v1/ordersItems', routerOrdersItems);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default app;

import mongoose from 'mongoose';

// Definir los esquemas con Mongoose
const ordersSchema = new mongoose.Schema(
  {
    marketId: {
      type: String,
      required: true,
    },
    orderItemId: {
      type: String,
      required: true,
    },
    orderStatusId: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'orders',
  }
);

const ordersStatusSchema = new mongoose.Schema(
  {
    orderStatus: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'orderStatus',
  }
);

const ordersItemsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'orderItems',
  }
);

// Crear los modelos a partir de los esquemas
const OrderModel = mongoose.model('OrderModel', ordersSchema);
const OrderStatusModel = mongoose.model('OrderStatusModel', ordersStatusSchema);
const OrdersItemsModel = mongoose.model('OrdersItemsModel', ordersItemsSchema);

export { OrderModel, OrderStatusModel, OrdersItemsModel };

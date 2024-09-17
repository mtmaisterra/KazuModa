import { OrdersItemsModel } from '../models/order.model.js';
import { orderItemsSchema } from '../schemas/orders.schemas.js';

const orderItemsGet = async (req, res) => {
  try {
    const results = await OrdersItemsModel.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const orderItemsGetID = async (req, res) => {
  try {
    const results = await OrdersItemsModel.findById(req.params.id);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const orderItemsPost = async (req, res) => {
  try {
    orderItemsSchema(req.body);
    const newOrderItem = new OrderModel(req.body);
    const results = await newOrderItem.save();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const orderItemsPut = async (req, res) => {
  try {
    console.log(req.params.id);
    orderItemsSchema(req.body);
    console.log(req.body);
    const results = await OrdersItemsModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { upsert: true }
    );
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const orderItemsDelete = async (req, res) => {
  try {
    await OrdersItemsModel.findByIdAndDelete(req.params.id);
    res.json({ Message: 'Order delete' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export {
  orderItemsDelete,
  orderItemsGet,
  orderItemsGetID,
  orderItemsPut,
  orderItemsPost,
};

import { OrderStatusModel } from '../models/order.model.js';
import { orderStatusSchema } from '../schemas/orders.schemas.js';

const orderStatusGet = async (req, res) => {
  try {
    const results = await OrderStatusModel.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const orderStatusGetID = async (req, res) => {
  try {
    const results = await OrderStatusModel.findById(req.params.id);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const orderStatusPost = async (req, res) => {
  try {
    orderStatusSchema(req.body);
    const newOrderStatus = new OrderStatusModel(req.body);
    const results = await newOrderStatus.save();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const orderStatusPut = async (req, res) => {
  try {
    console.log(req.params.id);
    orderStatusSchema(req.body);
    console.log(req.body);
    const results = await OrderStatusModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { upsert: true }
    );
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const orderStatusDelete = async (req, res) => {
  try {
    await OrderStatusModel.findByIdAndDelete(req.params.id);
    res.json({ Message: 'Order delete' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export {
  orderStatusDelete,
  orderStatusGet,
  orderStatusGetID,
  orderStatusPost,
  orderStatusPut,
};

import { OrderModel } from '../models/order.model.js';

const ordersGet = async (req, res) => {
  try {
    const results = await OrderModel.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const ordersGetID = async (req, res) => {
  try {
    const results = await OrderModel.findById(req.params.id);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const ordersPost = async (req, res) => {
  try {
    const newOrder = new OrderModel(req.body);
    const results = await newOrder.save();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const ordersPut = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const results = await OrderModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { upsert: true }
    );
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const ordersDelete = async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.json({ Message: 'Order delete' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export { ordersDelete, ordersGet, ordersGetID, ordersPut, ordersPost };

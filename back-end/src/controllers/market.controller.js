import Market from '../models/market.model.js';

export const getMarket = async (req, res) => {
  try {
    const marketFound = await Market.findById(req.params.id);
    if (!marketFound)
      return res.status(404).json({ message: 'Market not found' });
    return res.json(marketFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createMarket = async (req, res) => {
  try {
    const marketFound = await Market.findOne({ user_id: req.user.id });
    if (marketFound) {
      return res.status(400).json({ message: 'User already has a market' });
    }

    const { marketname } = req.body;
    const newMarket = new Market({
      marketname,
      user_id: req.user.id,
    });
    await newMarket.save();
    res.json(newMarket);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMarket = async (req, res) => {
  try {
    const { marketname, description, logo_url, banner_url } = req.body;
    const marketUpdated = await Market.findOneAndUpdate(
      { _id: req.params.id },
      { marketname, description, logo_url, banner_url },
      { new: true }
    );
    return res.json(marketUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMarket = async (req, res) => {
  try {
    const deletedMarket = await Market.findByIdAndDelete(req.params.id);
    if (!deletedMarket)
      return res.status(404).json({ message: 'Market not found' });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

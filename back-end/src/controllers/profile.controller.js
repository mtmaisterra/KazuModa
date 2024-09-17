import User from '../models/user.model.js';
import Market from '../models/market.model.js';
import RoleModel from '../models/role.model.js';

export const profile = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id).populate('roles');

    if (!userFound) return res.status(400).json({ message: 'User not found' });

    let responseData = {
      roles: userFound.roles.map((role) => role.name),
      id: userFound.id,
      avatar_url: userFound.avatar_url,
      name: userFound.name,
      email: userFound.email,
    };

    const marketFound = await Market.findOne({ user_id: req.user.id });

    if (marketFound) {
      responseData.market_id = marketFound._id;
    }

    return res.json(responseData);
  } catch (error) {
    res.status(404).json({ message: 'Error getting user' });
  }
};

export const updateProfileById = async (req, res) => {
  try {
    const updateData = req.body;

    // Check if the 'roles' field is being modified
    if (updateData.roles) {
      // Convert role names to IDs before updating
      const roleIds = await Promise.all(
        updateData.roles.map(async (roleName) => {
          const role = await RoleModel.findOne({ name: roleName });
          if (!role) {
            throw new Error(`Role '${roleName}' not found`);
          }
          return role._id;
        })
      );
      // Update the 'roles' field with the obtained IDs
      updateData.roles = roleIds;
    }

    const updateUser = await User.findByIdAndUpdate(
      req.params.userId,
      updateData,
      { new: true }
    );

    res.status(200).json(updateUser);
  } catch (error) {
    res
      .status(404)
      .json({ message: 'Error updating user', error: error.message });
  }
};

export const deleteProfileById = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.userId);
    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Error delete user' });
  }
};

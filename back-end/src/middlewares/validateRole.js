import User from '../models/user.model.js';
import RoleModel from '../models/role.model.js';

export const isAdmin = async (req, res, next) => {
  const userFound = await User.findById(req.user.id);
  const roles = await RoleModel.find({ _id: { $in: userFound.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'admin') {
      next();
      return;
    }
  }

  return res.status(403).json({ message: 'Require Admin role' });
};

export const isSeller = async (req, res, next) => {
  const userFound = await User.findById(req.user.id);
  const roles = await RoleModel.find({ _id: { $in: userFound.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'seller') {
      next();
      return;
    }
  }

  return res.status(403).json({ message: 'Require Seller role' });
};

export const isUser = async (req, res, next) => {
  const userFound = await User.findById(req.user.id);
  const roles = await RoleModel.find({ _id: { $in: userFound.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'user') {
      next();
      return;
    }
  }

  return res.status(403).json({ message: 'Require User role' });
};

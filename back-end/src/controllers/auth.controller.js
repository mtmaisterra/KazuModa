import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import RoleModel from '../models/role.model.js';
import { TOKEN_SECRET } from '../config/config.js';

export const register = async (req, res) => {
  const { roles, email, password } = req.body;

  try {
    // Search already exist email
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(['The email is already in use']);

    // Encript password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      roles,
      email,
      password: passwordHash,
    });

    if (roles) {
      const foundRoles = await RoleModel.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await RoleModel.findOne({ name: 'user' });
      newUser.roles = [role._id];
    }

    // Save new user
    const userSaved = await newUser.save();

    // Save access token
    const token = await createAccessToken({ id: userSaved._id });

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });

    res.json({
      id: userSaved._id,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const userFound = await User.findOne({ email }).populate('roles');
    if (!userFound)
      return res.status(400).json({ message: 'Invalid credentials' });

    // Compare user password
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid credentials' });

    // Save access token
    const token = await createAccessToken({
      roles: userFound.roles.map((role) => role.name),
      id: userFound._id,
      name: userFound.name,
      email: userFound.email,
    });

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    res.json({
      id: userFound._id,
      roles: userFound.roles.map((role) => role.name),
      name: userFound.name,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });

  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  return res.sendStatus(200);
};

export const verifyToken = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
      if (err) return res.status(401).json({ message: 'Unauthorized' });

      const userFound = await User.findById(user.id).populate('roles');
      if (!userFound) return res.status(401).json({ message: 'Unauthorized' });

      // Respond with user details
      return res.json({
        id: userFound._id,
        roles: userFound.roles.map((role) => role.name),
        name: userFound.name,
        email: userFound.email,
      });
    });
  } catch (error) {
    return res.status(400).json({ message: 'Error getting token ' });
  }
};

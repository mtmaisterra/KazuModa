import mongoose from 'mongoose';

const sizeSchemma = new mongoose.Schema(
  {
    sizename: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

export default new mongoose.model('Size', sizeSchemma);

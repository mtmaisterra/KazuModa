import mongoose from 'mongoose';

const roleSchemma = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Role', roleSchemma);

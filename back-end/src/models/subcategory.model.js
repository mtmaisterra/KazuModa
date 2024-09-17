import mongoose from 'mongoose';

const subcategorySchema = new mongoose.Schema(
  {
    subcategoryname: {
      type: String,
      required: [true, 'Falta el campo sub categoria'],
      trim: true,
    },
    image_url: {
      type: String,
      trim: true,
    }
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Subcategory', subcategorySchema);

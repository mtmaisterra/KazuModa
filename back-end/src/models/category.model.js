import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    categoryname: {
      type: String,
      required: [true, 'Falta el campo categoria'],
      trim: true,
    },
    image_url: {
      type: String,
      trim: true,
    },
    subcategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Category', categorySchema);

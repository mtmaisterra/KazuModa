import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    market_id: {
      ref: 'Market',
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
    },
    category_id: {
      type: String,
      required: true,
      trim: true,
    },
    subcategory_id: {
      type: String,
      required: true,
      trim: true,
    },
    size_id: {
      ref: 'Size',
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
    },
    product_status: {
      type: String,
      enum: [1, 0],
      default: 'pendiente',
      required: true,
      trim: true,
    },
    productname: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image_url: {
      type: [String],
      trim: true,
    },
    color: {
      type: String,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model('Product', productSchema);

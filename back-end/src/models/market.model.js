import mongoose from 'mongoose';

const marketSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    marketname: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    logo_url: {
      type: String,
      required: false,
      trim: true,
    },
    banner_url: {
      type: String,
      required: false,
      trim: true,
    },
    products: [
      {
        ref: 'Product',
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model('Market', marketSchema);

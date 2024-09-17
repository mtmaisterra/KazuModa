import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: function (v) {
          // Using a simple regex to validate email format
          return /\S+@\S+\.\S+/.test(v);
        },
        message: 'Invalid email format',
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    avatar_url: {
      type: String,
      required: false,
      trim: true,
    },
    zip_code: {
      type: Number,
      required: false,
    },
    state: {
      type: String,
      required: false,
      trim: true,
    },
    city: {
      type: String,
      required: false,
      trim: true,
    },
    street_1: {
      type: String,
      required: false,
      trim: true,
    },
    street_2: {
      type: String,
      required: false,
      trim: true,
    },
    number: {
      type: Number,
      required: false,
    },
    status: {
      type: Number,
      required: false,
      default: 1,
    },
    roles: [
      {
        ref: 'Role',
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model('User', userSchema);

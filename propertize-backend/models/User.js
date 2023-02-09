import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserModel = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 20,
  },
  phone: {
    type: String,
    required: false,
    unique: true,
    max: 12,
    min: 10,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  about: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
  socialLinks: [String],
  isAdmin: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['Pending', 'Active'],
    default: 'Pending',
  },
  confirmationCode: {
    type: String,
    unique: true,
  },
}, { timestamps: true });

export default mongoose.model('User', UserModel);

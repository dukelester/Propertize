import mongoose from 'mongoose';

const { Schema } = mongoose;

const AgentsSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  company: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  linkedn: {
    type: String,
  },
  agencyType: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Agent', AgentsSchema);

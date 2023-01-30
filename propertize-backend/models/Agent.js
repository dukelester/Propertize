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
  },
  company: {
    type: String,
    required: true,
  },
  socialLinks: {
    type: [String],
  },
  agencyType: {
    type: String,
    required: true,
  },
  photo: String,
}, { timestamps: true });

export default mongoose.model('Agent', AgentsSchema);

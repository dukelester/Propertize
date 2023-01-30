import mongoose from 'mongoose';

const { Schema } = mongoose;

const PropertySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  amenities: {
    type: [String],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  additionalDetails: {
    type: [String],
  },
  propertyType: {
    type: String,
  },
  details: {
    type: [String],
  },
  attachments: {
    type: [String],
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  floorPlans: {
    type: [String],
  },
  propertyFor: {
    type: String, // rent, buy, build
  },
}, { timestamps: true });

export default mongoose.model('Property', PropertySchema);

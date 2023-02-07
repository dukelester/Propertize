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
    required: true,
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
    required: true,
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
    enum: ['RENT', 'BUY', 'BUILD'],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  kitchen: {
    type: Number,
    required: true,
  },
  livingroom: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model('Property', PropertySchema);

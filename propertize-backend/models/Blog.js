import mongoose from 'mongoose';

const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tags: {
    type: [String],
  },
  category: {
    type: String,
    enum: ['Sports', 'Food', 'Health', 'Automobiles', 'Education', 'Travel', 'Life Style', 'Land',
      'Technology', 'Weather', 'Security', 'Other'],
  },
  createdBy: {
    type: String,
    required: true,
  },
}, { timestamps: true });

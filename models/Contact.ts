import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    trim: true,
  },
  eventServiceInterest: {
    type: String,
    required: [true, 'Event/Service interest is required'],
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
  },
  newsletterSubscribed: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'completed', 'archived'],
    default: 'new',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
contactSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact; 
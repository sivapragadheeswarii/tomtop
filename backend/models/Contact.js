import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    organization: {
      type: String,
      default: ''
    },
    designation: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      enum: ['Client', 'Vendor', 'Partner', 'Business Contact', 'Other'],
      default: 'Business Contact'
    },
    notes: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

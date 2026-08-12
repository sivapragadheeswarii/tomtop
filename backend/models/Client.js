import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    company: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    service: {
      type: String,
      default: 'Enterprise Software'
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive', 'Prospect'],
      default: 'Active'
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

const Client = mongoose.model('Client', clientSchema);

export default Client;

import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: ['Company Documents', 'Client Documents', 'Project Documents', 'Contracts', 'Agreements', 'Invoices', 'Other'],
      default: 'Company Documents'
    },
    fileType: {
      type: String,
      required: true,
      default: 'PDF'
    },
    fileUrl: {
      type: String,
      required: true
    },
    fileSize: {
      type: String,
      default: '1.2 MB'
    },
    description: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

const Document = mongoose.model('Document', documentSchema);

export default Document;

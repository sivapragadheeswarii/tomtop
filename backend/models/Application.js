import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    resumeUrl: { type: String, required: true },
    message: { type: String, default: '' },
    status: { type: String, enum: ['Pending', 'Reviewed', 'Shortlisted', 'Rejected'], default: 'Pending' }
  },
  { timestamps: true }
);

const Application = mongoose.model('Application', applicationSchema);
export default Application;

import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, default: 'Full-Time' }, // Full-Time, Remote, Internship, Contract
    location: { type: String, default: 'Madurai, TN / Remote' },
    experience: { type: String, default: '1-3 Years' },
    description: { type: String, required: true },
    requirements: [{ type: String }],
    status: { type: String, enum: ['Open', 'Closed', 'Draft'], default: 'Open' }
  },
  { timestamps: true }
);

const Career = mongoose.model('Career', careerSchema);
export default Career;

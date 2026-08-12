import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: '' },
    client: { type: String, default: 'Enterprise Partner' },
    results: { type: String, default: '100% Operational Efficiency' },
    status: { type: String, enum: ['Active', 'Completed', 'Draft'], default: 'Active' }
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;

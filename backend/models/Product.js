import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    shortDesc: { type: String, required: true },
    features: { type: [String], default: [] },
    image: { type: String, default: '' },
    status: { type: String, enum: ['Active', 'Draft'], default: 'Active' }
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;

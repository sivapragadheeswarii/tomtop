import Product from '../models/Product.js';

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  const { name, category, shortDesc, features, image, status } = req.body;

  try {
    const product = new Product({
      name,
      category,
      shortDesc,
      features: Array.isArray(features) ? features : (features ? features.split(',').map(f => f.trim()) : []),
      image: image || '',
      status: status || 'Active'
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  const { name, category, shortDesc, features, image, status } = req.body;

  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name !== undefined ? name : product.name;
      product.category = category !== undefined ? category : product.category;
      product.shortDesc = shortDesc !== undefined ? shortDesc : product.shortDesc;
      if (features !== undefined) {
        product.features = Array.isArray(features) ? features : features.split(',').map(f => f.trim());
      }
      product.image = image !== undefined ? image : product.image;
      product.status = status !== undefined ? status : product.status;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({ message: 'Product removed successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Seed default products
export const seedProducts = async () => {
  try {
    const defaultProducts = [
      {
        name: "ClearBill Billing ERP",
        category: "Billing Software",
        shortDesc: "Enterprise paperless billing automation platform for retail chains, distributors, and multi-branch trading businesses.",
        features: [
          "Automated GST Invoice Generation",
          "Barcode Scanner POS Integration",
          "Multi-Branch Stock Syncing",
          "WhatsApp & Email Bill Sharing"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        status: "Active"
      },
      {
        name: "KTS Kaithari ERP",
        category: "Textile & Manufacturing",
        shortDesc: "Specialized ERP software engineered for handloom, powerloom, yarn dyeing, and textile batch inventory tracking.",
        features: [
          "Loom Allocation & Weaver Payroll",
          "Yarn Batch Stock Tracking",
          "Production Order Scheduling",
          "Automated Profitability Reports"
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
        status: "Active"
      },
      {
        name: "GuruDesk Campus ERP",
        category: "EdTech & Campus",
        shortDesc: "All-in-one institutional management portal handling student admissions, fee collection, attendance, and parent communication.",
        features: [
          "Online Fee Payment Gateway",
          "Biometric Student Attendance Sync",
          "Parent Mobile App Portal",
          "Automated SMS & WhatsApp Alerts"
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        status: "Active"
      }
    ];

    for (const prod of defaultProducts) {
      const exists = await Product.findOne({ name: prod.name });
      if (!exists) {
        await Product.create(prod);
        console.log(`✅ Seeded default product: ${prod.name}`);
      }
    }

    // Clean up any duplicate products in MongoDB Atlas
    const allProducts = await Product.find({});
    const seenNames = new Set();
    for (const p of allProducts) {
      const cleanName = p.name.trim().toLowerCase();
      if (seenNames.has(cleanName)) {
        await Product.findByIdAndDelete(p._id);
        console.log(`🗑️ Removed duplicate product from MongoDB: ${p.name}`);
      } else {
        seenNames.add(cleanName);
      }
    }
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

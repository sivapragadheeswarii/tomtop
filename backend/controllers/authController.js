import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'tomtop_secret_jwt_key_2026_secure', {
    expiresIn: '30d'
  });
};

// Seed default admin if none exists
export const seedAdmin = async () => {
  try {
    const adminExists = await Admin.findOne({ email: process.env.ADMIN_EMAIL || 'admin@tomtopsolutions.com' });
    if (!adminExists) {
      await Admin.create({
        name: 'Tomtop Admin',
        email: process.env.ADMIN_EMAIL || 'admin@tomtopsolutions.com',
        password: process.env.ADMIN_PASSWORD || 'admin123',
        role: 'admin'
      });
      console.log('Default Admin Account Seeded: admin@tomtopsolutions.com / admin123');
    }
  } catch (err) {
    console.error('Error seeding admin:', err.message);
  }
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        token: generateToken(admin._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdminProfile = async (req, res) => {
  if (req.admin) {
    res.json(req.admin);
  } else {
    res.status(404).json({ message: 'Admin not found' });
  }
};

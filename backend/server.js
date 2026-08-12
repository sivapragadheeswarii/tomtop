import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { seedAdmin } from './controllers/authController.js';
import { seedProjects } from './controllers/projectController.js';
import { seedProducts } from './controllers/productController.js';
import { seedDocuments } from './controllers/documentController.js';
import { seedClients } from './controllers/clientController.js';
import { seedContacts } from './controllers/contactController.js';

import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import productRoutes from './routes/productRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import documentRoutes from './routes/documentRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB().then(() => {
  seedAdmin();
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/products', productRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contacts', contactRoutes);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Tomtop Solutions Backend Service Active' });
});

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`🚀 Tomtop Server running on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Port ${port} is busy. Trying port ${Number(port) + 1}...`);
      startServer(Number(port) + 1);
    } else {
      console.error(err);
    }
  });
};

const INITIAL_PORT = process.env.PORT || 5001;
startServer(INITIAL_PORT);

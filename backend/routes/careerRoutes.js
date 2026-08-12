import express from 'express';
import {
  getCareers,
  createCareer,
  updateCareer,
  deleteCareer
} from '../controllers/careerController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getCareers)
  .post(protect, createCareer);

router.route('/:id')
  .put(protect, updateCareer)
  .delete(protect, deleteCareer);

export default router;

import express from 'express';
import {
  submitApplication,
  getApplications,
  updateApplicationStatus,
  deleteApplication
} from '../controllers/applicationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(submitApplication)
  .get(protect, getApplications);

router.route('/:id')
  .put(protect, updateApplicationStatus)
  .delete(protect, deleteApplication);

export default router;

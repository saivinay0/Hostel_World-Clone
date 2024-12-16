import express from 'express';
import { getUserProfile, getUserBookings } from '../controllers/userController.js';
import { protect } from '../middlewares/protect.js';

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.get('/bookings', protect, getUserBookings);

export default router;

import express from 'express';
import { protect } from '../middlewares/protect.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import {
    createBooking,
    getUserBookings,
    getAllBookings,
    deleteBooking,
} from '../controllers/bookingController.js';

const router = express.Router();

// User routes
router.post('/', protect, createBooking);        // Create a booking
router.get('/', protect, getUserBookings);       // Get user's bookings

// Admin routes
router.get('/all', protect, isAdmin, getAllBookings); // Fetch all bookings
router.delete('/:id', protect, deleteBooking);      // Delete a booking

export default router;

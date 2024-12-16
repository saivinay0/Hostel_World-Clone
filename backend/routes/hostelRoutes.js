import express from 'express';
import {
    createHostel,
    getHostels,
    getHostelById,
    updateHostel,
    deleteHostel,
} from '../controllers/hostelController.js';
import protect from '../middlewares/authMiddleware.js';
import isAdmin from '../middlewares/isAdmin.js';

const router = express.Router();

// User Routes
router.get('/', getHostels);                    // Fetch all hostels
router.get('/:id', getHostelById);              // Fetch hostel by ID

// Admin Routes
router.post('/', protect, isAdmin, createHostel);        // Add new hostel
router.put('/:id', protect, isAdmin, updateHostel);      // Update hostel
router.delete('/:id', protect, isAdmin, deleteHostel);   // Delete hostel

export default router;

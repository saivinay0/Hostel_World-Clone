import express from "express";
import {
    getAllHotels,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel,
} from "../controllers/hotelController.js";
import { protect } from "../middlewares/protect.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

// Public routes
router.get("/", getAllHotels); // Get all hotels
router.get("/:id", getHotelById); // Get hotel by ID

// Admin-protected routes
router.post("/", protect, isAdmin, createHotel); // Create a hotel
router.put("/:id", protect, isAdmin, updateHotel); // Update a hotel
router.delete("/:id", protect, isAdmin, deleteHotel); // Delete a hotel

export default router;

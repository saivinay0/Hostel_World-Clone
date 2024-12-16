import Booking from '../models/Booking.js';
import Hostel from '../models/Hostel.js';

// Create a booking
export const createBooking = async (req, res) => {
    const { hostelId, checkInDate, checkOutDate, totalPrice } = req.body;

    try {
        // Validate the request data
        if (!hostelId || !checkInDate || !checkOutDate || !totalPrice) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        // Find the hostel
        const hostel = await Hostel.findById(hostelId);
        if (!hostel) {
            return res.status(404).json({ message: 'Hostel not found' });
        }

        // Create a booking
        const booking = new Booking({
            user: req.user.id, // Retrieved from the auth middleware
            hostel: hostelId,
            checkInDate,
            checkOutDate,
            totalPrice,
        });

        await booking.save();
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Fetch all bookings for an authenticated user
export const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id }).populate('hostel', 'name location price');
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Fetch all bookings for admin
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user', 'name email').populate('hostel', 'name location price');
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a booking
export const deleteBooking = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await Booking.findById(id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        // Check if the user is the owner of the booking or an admin
        if (booking.user.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(401).json({ message: 'Not authorized to delete this booking' });
        }

        await booking.deleteOne();
        res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

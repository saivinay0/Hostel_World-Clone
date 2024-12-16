import Hotel from "../models/Hotel.js";

// Get all hotels
export const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ message: "Error fetching hotels" });
    }
};

// Get hotel by ID
export const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) return res.status(404).json({ message: "Hotel not found" });
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json({ message: "Error fetching hotel" });
    }
};

// Create a new hotel
export const createHotel = async (req, res) => {
    try {
        const newHotel = new Hotel(req.body);
        const savedHotel = await newHotel.save();
        res.status(201).json(savedHotel);
    } catch (error) {
        res.status(500).json({ message: "Error creating hotel" });
    }
};

// Update a hotel
export const updateHotel = async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedHotel)
            return res.status(404).json({ message: "Hotel not found" });
        res.status(200).json(updatedHotel);
    } catch (error) {
        res.status(500).json({ message: "Error updating hotel" });
    }
};

// Delete a hotel
export const deleteHotel = async (req, res) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!deletedHotel)
            return res.status(404).json({ message: "Hotel not found" });
        res.status(200).json({ message: "Hotel deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting hotel" });
    }
};

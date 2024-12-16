import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "No description provided.",
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    amenities: {
        type: [String], // Array of strings for amenities like Wi-Fi, Parking, etc.
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;

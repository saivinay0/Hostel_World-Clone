import mongoose from 'mongoose';

const hostelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    availableRooms: { type: Number, required: true },
    facilities: { type: [String] },
    images: { type: [String] }, // Array of image URLs
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Ref to User model
}, { timestamps: true });

const Hostel = mongoose.model('Hostel', hostelSchema);
export default Hostel;

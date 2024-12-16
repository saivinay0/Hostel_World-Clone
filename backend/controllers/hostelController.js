import Hostel from '../models/Hostel.js';

// @desc    Create a new hostel
// @route   POST /api/hostels
const createHostel = async (req, res) => {
    try {
        const { name, location, description, price, availableRooms, facilities, images } = req.body;

        const hostel = new Hostel({
            name,
            location,
            description,
            price,
            availableRooms,
            facilities,
            images,
            owner: req.user, // Owner is the authenticated user
        });

        const savedHostel = await hostel.save();
        res.status(201).json(savedHostel);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// @desc    Get all hostels
// @route   GET /api/hostels
router.get("/", async (req, res) => {
    const { search, location } = req.query;

    const query = {};
    if (search) query.name = { $regex: search, $options: "i" };
    if (location) query.location = { $regex: location, $options: "i" };

    const hostels = await Hostel.find(query);
    res.json(hostels);
});

// @desc    Get hostel by ID
// @route   GET /api/hostels/:id
const getHostelById = async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id);
        if (!hostel) return res.status(404).json({ message: 'Hostel not found' });

        res.json(hostel);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// @desc    Update hostel
// @route   PUT /api/hostels/:id
const updateHostel = async (req, res) => {
    try {
        const updatedHostel = await Hostel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedHostel) return res.status(404).json({ message: 'Hostel not found' });

        res.json(updatedHostel);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// @desc    Delete hostel
// @route   DELETE /api/hostels/:id
const deleteHostel = async (req, res) => {
    try {
        const deletedHostel = await Hostel.findByIdAndDelete(req.params.id);
        if (!deletedHostel) return res.status(404).json({ message: 'Hostel not found' });

        res.json({ message: 'Hostel deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

export { createHostel, getHostels, getHostelById, updateHostel, deleteHostel };

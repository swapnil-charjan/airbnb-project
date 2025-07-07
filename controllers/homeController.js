import Home from '../modules/home.js';

export const createHome = async (req, res) => {
    try {
        const HomeData = await Home.create(req.body);
        res.status(201).json({ HomeData, message: "Home created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllHomes = async (req, res) => {
    try {
        const HomeList = await Home.find({});
        res.status(200).json(HomeList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateHome = (req, res) => {
    try{
        const { id } = req.params;
        const updatedData = req.body;
        Home.findByIdAndUpdate(id, updatedData, { new: true })        
            .then(() => res.status(200).json({ message: "Home deleted successfully" }))
            .catch(error => res.status(500).json({ error: error.message }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteHome = (req, res) => {
    try {
        const { id } = req.params;
        Home.findByIdAndDelete(id)
            .then(() => res.status(200).json({ message: "Home deleted successfully" }))
            .catch(error => res.status(500).json({ error: error.message }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

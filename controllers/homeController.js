import Home from '../modules/home.js';

export const createHome = async (req, res) => {
    try {
        const HomeData = await Home.create(req.body);
        res.status(201).json({HomeData, message: "Home created successfully"});
    } catch (error) {   
        res.status(500).json({error: error.message});
    }
};

export const getAllHomes = async (req, res) => {
};

export const editHome = (req, res) => {
};

export const deleteHome = (req, res) => {
};

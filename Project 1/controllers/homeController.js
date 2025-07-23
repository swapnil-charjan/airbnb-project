import Home from '../modules/home.js';

// export const createHome = async (req, res) => {
//     try {
//         const HomeData = await Home.create(req.body);
//         res.status(201).json({ HomeData, message: "Home created successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// export const getAllHomes = async (req, res) => {
//     try {
//         const HomeList = await Home.find({});
//         res.status(200).json(HomeList);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// export const updateHome = (req, res) => {
//     try{
//         const { id } = req.params;
//         const updatedData = req.body;
//         Home.findByIdAndUpdate(id, updatedData, { new: true })        
//         .then(() => res.status(200).json({ message: "Home deleted successfully" }))
//         .catch(error => res.status(500).json({ error: error.message }));
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// export const deleteHome = (req, res) => {
//     try {
//         const { id } = req.params;
//         Home.findByIdAndDelete(id)
//             .then(() => res.status(200).json({ message: "Home deleted successfully" }))
//             .catch(error => res.status(500).json({ error: error.message }));
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// ------------------------------------------------------------------------------------------------------------------------

export const createHome = (req, res) => {
    const data = req.body;
    Home.collection.insertOne(data, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ result, message: "Home inserted successfully" });
        }
    });
};

export const getAllHomes = (req, res) => {
    Home.find({})
        .then((homes) => {
            res.status(200).json({ homes, message: "Home list fetched successfully" });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};


export const updateHome = (req, res) => {
    const data = req.body;
    const { id } = req.params;
    Home.collection.updateOne(
        { _id: id },
        { $set: data },
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json({ result, message: "Home updated successfully" });
            }
        }
    );
};

export const deleteHome = (req, res) => {
    const { id } = req.params;
    Home.collection.deleteOne(
        { _id: id },
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ result, message: "Home deleted successfully" });
            }
        });
};
const Insurance = require('../models/insurance.model');

const createInsurance = async (req, res) => {
    try {
        const { type, description, price, companyName } = req.body;
        console.log(req.body);
        console.log(type, description, price, companyName);
        const newInsurance = new Insurance({
            type,
            description,
            price,
            company: { name: companyName },
        });
        newInsurance 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    } catch (error) {
        res.status(500).json({ error: 'Could not create insurance.' });
    }
};

const getAllInsurances = async (req, res) => {
    try {
        const insurances = await Insurance.find();
        res.status(200).json(insurances);
    } catch (error) {
        res.status(500).json({ error: 'Could not fetch insurances.' });
    }
};

const getInsuranceById = async (req, res) => {
    try {
        const insurance = await Insurance.findById(req.params.id);
        if (!insurance) {
            return res.status(404).json({ message: 'Insurance not found.' });
        }
        res.status(200).json(insurance);
    } catch (error) {
        res.status(500).json({ error: 'Could not fetch insurance.' });
    }
};

const updateInsurance = async (req, res) => {
    try {
        const { type, description, price, companyName } = req.body;
        const updatedInsurance = await Insurance.findByIdAndUpdate(
            req.params.id,
            {
                type,
                description,
                price,
                company: { name: companyName },
            },
            { new: true }
        );
        if (!updatedInsurance) {
            return res.status(404).json({ message: 'Insurance not found.' });
        }
        res.status(200).json(updatedInsurance);
    } catch (error) {
        res.status(500).json({ error: 'Could not update insurance.' });
    }
};

const deleteInsurance = async (req, res) => {
    try {
        const deletedInsurance = await Insurance.findByIdAndRemove(req.params.id);
        if (!deletedInsurance) {
            return res.status(404).json({ message: 'Insurance not found.' });
        }
        res.status(200).json({ message: 'Insurance deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Could not delete insurance.' });
    }
};

module.exports = {
    createInsurance,
    getAllInsurances,
    getInsuranceById,
    updateInsurance,
    deleteInsurance,
};

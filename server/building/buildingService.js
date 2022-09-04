const Building = require('./buildingSchema');

const getBuildings = async query => {
    const conditions = [
        {
            "name": { $regex: query, $options: 'i' }
        },
        {
            "address": { $regex: query, $options: 'i' }
        },
        {
            "city": { $regex: query, $options: 'i' }
        },
        {
            "state": { $regex: query, $options: 'i' }
        },
        {
            "postal": { $regex: query, $options: 'i' }
        }
    ];

    const result = await Building.find({ $or: conditions });
    return result;
}

module.exports = {
    getBuildings
};
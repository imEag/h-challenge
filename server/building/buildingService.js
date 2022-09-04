const Building = require('./buildingSchema');

const getBuildings = async query => {
    const result = await Building.find({});
    return result;
}

module.exports = {
    getBuildings
};
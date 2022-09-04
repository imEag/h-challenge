const buildingService = require('./buildingService');

const buildingHandler = async (req, res) => {
    const query = req.body.query;

    if (!query) return res.status(400).send({ message: "Invalid query", data: null });

    try {
        const buildings = await buildingService.getBuildings(query);
        return res.status(200).send({ message: "Success", data: buildings });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "An Error ocurred", data: null })
    }

}

module.exports = buildingHandler;
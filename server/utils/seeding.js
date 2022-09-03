const fs = require('fs');
const db = require('./db');
require('dotenv').config();

db()
    .then(res => console.log('Connected to DB'))
    .catch(err => console.error(`An error ocurred while connecting to DB ${err}`));

const Building = require('../building/buildingModel');

const buildingsData = JSON.parse(fs.readFileSync(`${__dirname}/../seeds/buildings.json`, 'utf-8'));

const importBuildings = async () => {
    await buildingsData.map(building => {
        const newBuilding = new Building({
            _id: building._id,
            name: building.name,
            address: building.address,
            city: building.city,
            state: building.state,
            postal: building.postal,
            plans: building.plans
        });

        newBuilding.save()
            .then(res => console.log(`${res}. Succesfully stored in DB`))
            .catch(err => console.error(`An error ocurred. ${err}`));
    });
}

const deleteBuildings = async () => {
    Building.deleteMany({})
        .then(res => console.log(`${res}. Deleted all buildings`))
        .catch(err => console.error(`An error ocurred while deleting. ${err}`));
}
console.log(process.argv);

if (process.argv[2] === "-i") { importBuildings() }
else if (process.argv[2] === "-d") { deleteBuildings() }
else { console.log('Incorrect argument') }
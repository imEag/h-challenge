const app = require('./server/server');
const db = require('./server/utils/db');
require('dotenv').config();

const port = process.env.PORT || 5000;

db()
    .then(res => {
        console.log('Connection to db succesful');

        app.listen(port, () => {
            console.log(`Listening to port ${port}`);
        });
    })
    .catch(err => {
        console.log(err);
    });



const express = require('express');
const configRoutes = require('./routes');
const helper = require('./helpers');
const app = express();

app.use(express.json());

configRoutes(app);


app.listen(helper.PORT, function (error) {
    if (error) {
        console.log('Failed to start server', error);
    }
    console.log(`Server listening on: ${helper.localhostURL}`);
});

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 4000;

/*
 * Middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use('/api', apiRoute);

// Middleware to parse API Keys from frontend "Authentication" header
const parseAuthHeader = (req, res, next) => {

    // Decode bas464 string then parse the JSON into an object
    const apiKeys = JSON.parse(Buffer.from(req.headers["authentication"], 'base64').toString());

    // Set headers for routes to use based on parsed API keys from header
    req.headers["public-key"] = apiKeys.pubKey;
    req.headers["secret-key"] = apiKeys.secKey;

    next()
}

/*
 * Include functions for each route
 */
const { authenticate } = require("./controllers/authenticate");
const { sendmanualcredits } = require("./controllers/sendmanualcredits");
const { sendmanualorders } = require("./controllers/sendmanualorders");
const { deletetriggers } = require("./controllers/deletetriggers");
const { editaffiliates } = require("./controllers/editaffiliates");
const { uploadorders } = require("./controllers/uploadorders");

/*
 * Routes
 */

// Authenticate API Keys Endpoint
app.post("/authenticate", authenticate)

// Credit Manual Credits Endpoint
app.post("/sendmanualcredits", parseAuthHeader, sendmanualcredits)

// Credit Manual Orders Endpoint
app.post("/sendmanualorders", parseAuthHeader, sendmanualorders)

// Delete Triggers Endpoint
app.post("/deletetriggers", parseAuthHeader, deletetriggers)

// Edit Affiliates Endpoint
app.post("/editaffiliates", parseAuthHeader, editaffiliates)

// Upload Urders Endpoint
app.post("/uploadorders", parseAuthHeader, uploadorders)


/*
 * Error Handling
 */

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Graceful server shutdown
process.on('SIGTERM', () => {
    debug('SIGTERM signal received: closing HTTP server')
    server.close(() => {
        debug('HTTP server closed')
    })
})
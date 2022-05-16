const axios = require("axios");
const dotenv = require("dotenv");
require('dotenv').config();


const authenticate = (req, res) => {

    // Leverage axios to send the keys back to Refersion's check_account endpoint
    axios({
        method: 'post',
        url: process.env.PROD+'api/check_account', // check_account not working on dev for some reason
        headers: {
            "Refersion-Public-Key": req.body.pubKey,
            "Refersion-Secret-Key": req.body.secKey,
            "Content-Type": "application/json",
        },
        data: []

    })
        .then(function (response) {
            // Check to see if response is ok and keys are valid
            if (response.status === 200) {
                res.json({ status: 'success', message: response.statusText })
            } else {
                res.json({ status: 'error', message: response.statusText })
            }
            //console.log(__dirname + '../../../.env');
        })
        .catch(function (error) {
            res.json({ status: 'error', message: error.response.data.error });
        });
}

module.exports.authenticate = authenticate;
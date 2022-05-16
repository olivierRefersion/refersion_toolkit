const axios = require("axios");
require('dotenv').config();

const editaffiliates = async (req, res) => {
    //Initialize variables for responses.
    let responseObject = {
        successObject: {
            successCount: 0,
            successInfoArray: []
        },
        failedObject: {
            failedCount: 0,
            failedInfoArray: []
        }
    }

    //Take the json object from the frontend request and loop through it
    console.log(req.body.jsonObj);
    //TODO: Need to figure out a sort of validation for the custom field id keys since Refersion's API will delete those sent in with values that are empty strings.
    for (let i = 0; i < req.body.jsonObj.length; i++) {
        await axios({
            method: 'post',
            url: process.env.PROD + '/api/edit_affiliate',
            headers: {
                "Refersion-Public-Key": req.headers["public-key"],
                "Refersion-Secret-Key": req.headers["secret-key"],
                "Content-Type": "application/json",
            },
            data: req.body.jsonObj[i]

        })
            .then(function (response) {
                // handle success
                //console.log(response.data);

                responseObject.successObject.successInfoArray.push(`The edit for Affiliate ID: ${req.body.jsonObj[i].id} is a ${response.data.response}`);
                responseObject.successObject.successCount ++;
            })
            .catch(function (error) {
                //console.log(error.response.data.errors);

                responseObject.failedObject.failedInfoArray.push(`Error for ${req.body.jsonObj[i].id}: ${error.response.data.errors}`);
                responseObject.failedObject.failedCount ++;
            });
    }
    res.send(responseObject);

}

module.exports.editaffiliates = editaffiliates;
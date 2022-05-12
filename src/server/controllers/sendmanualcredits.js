const axios = require("axios");
require('dotenv').config();

const sendmanualcredits = async (req, res) => {
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
    for (let i = 0; i < req.body.jsonObj.length; i++) {

        //Set new variables for the properties on each object to be passed into the data for the Axios call
        const id = req.body.jsonObj[i].id;
        const commission = req.body.jsonObj[i].commission;
        const status = req.body.jsonObj[i].status;
        const currency = req.body.jsonObj[i].currency;
        const notes = req.body.jsonObj[i].notes;

        await axios({
            method: 'post',
            url: process.env.DEV + '/api/manual_credit_order_id',
            headers: {
                "Refersion-Public-Key": req.headers["public-key"],
                "Refersion-Secret-Key": req.headers["secret-key"],
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            data: {
                "id": id,
                "commission": commission,
                "status": status,
                "currency": currency,
                "notes": notes
            }
            })
            .then(function (response) {
                responseObject.successObject.successInfoArray.push(`Commission of ${commission} ${currency} for affiliate ID ${id} is created. Conversion ID is ${response.data.conversion_id}`);
                responseObject.successObject.successCount ++;
            })
            .catch(function (error) {
                console.log(error.response.data.error);
                responseObject.failedObject.failedInfoArray.push(`Commission of ${commission} ${currency} for affiliate ID ${id} has failed due  to: ${error.response.data.error}`)
                responseObject.failedObject.failedCount ++;

            });
        }
    res.send(responseObject)
    }

module.exports.sendmanualcredits = sendmanualcredits;
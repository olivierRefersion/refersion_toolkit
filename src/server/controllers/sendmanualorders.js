const axios = require("axios");

const sendmanualorders = async (req, res) => {
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
        let order_id = req.body.jsonObj[i].order_id;
        let id = req.body.jsonObj[i].affiliate_id;
        let status = req.body.jsonObj[i].status;
        let notes = req.body.jsonObj[i].notes;
        await axios({
            method: 'post',
            url: 'https://www.rfsndev.com/api/manual_credit_order_id',
            headers: {
                "Refersion-Public-Key": req.headers["public-key"],
                "Refersion-Secret-Key": req.headers["secret-key"],
                "Content-Type": "application/json"
            },
            data: {
                order_id,
                id,
                status,
                notes
            }
        })
            .then(function (response) {
                // handle success
                console.log(response.data);
                responseObject.successObject.successInfoArray.push(response.data);
                responseObject.successObject.successCount ++;
            })
            .catch(function (error) {
                console.log(`Order ID ${order_id} did not process due to ${error.response.data.error}`)
                responseObject.failedObject.failedInfoArray.push(`Order ID ${order_id} did not process due to ${error.response.data.error}`)
                responseObject.failedObject.failedCount ++;
            });
        }
        res.send(responseObject);
}

module.exports.sendmanualorders = sendmanualorders;
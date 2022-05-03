const axios = require("axios");

const sendmanualorders = async (req, res) => {
    let successObject = {
        successCount: 0,
        successInfoArray: []
    }
    let failedObject = {
        failedCount: 0,
        failedInfoArray: []
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
            })
            .catch(function (error) {
                console.log(`Order ID ${order_id} did not process due to ${error.response.data.error}`)
                failedObject.failedInfoArray.push(`Order ID ${order_id} did not process due to ${error.response.data.error}`)
                failedObject.failedCount ++;
            });
        }
        // res.send(failedCount);
        console.log(failedObject.failedCount);
        res.send(failedObject);
}       //TODO: Create one object for both success and failed. Add those together as one object to get sent to the frontend

module.exports.sendmanualorders = sendmanualorders;
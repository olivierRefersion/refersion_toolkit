const axios = require("axios");

const sendmanualcredits = (req, res) => {

    //Take the json object from the frontend request and loop through it
    for (let i = 0; i < req.body.jsonObj.length; i++) {

        //Set new variables for the properties on each object to be passed into the data for the Axios call
        let id = req.body.jsonObj[i].id;
        let commission = req.body.jsonObj[i].commission;
        let status = req.body.jsonObj[i].status;
        let currency = req.body.jsonObj[i].currency;
        let notes = req.body.jsonObj[i].notes;

        axios({
            method: 'post',
            url: 'https://api.rfsndev.com/v2/conversion/manual_credit',
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

                //For reference in sending back to the front end results tables
                console.log("Response status is" + response.status);
                console.log("Response status text is" + response.statusText);
                console.log("Response conversion ID is" + response.data.conversion_id);
                console.log("Response Affiliate ID" + response.config.data.id);
                console.log("Response Affiliate ID" + response.config.data.commmission);
                console.log("Response Affiliate ID" + response.config.data.currency);
            })
            .catch(function (error) {
                console.log(error);
                // console.log(error);
            });

    }
    res.json();

}

module.exports.sendmanualcredits = sendmanualcredits;
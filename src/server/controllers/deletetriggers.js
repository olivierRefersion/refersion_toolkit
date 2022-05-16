const axios = require("axios");
require('dotenv').config();

const deletetriggers = async (req, res) => {

    console.log(req.body.jsonObj);
    console.log(req.body.pubKey);
    console.log(req.body.secKey);
    //Take the json object from the frontend request and loop through it
    for (let i = 0; i < req.body.jsonObj.length; i++) {
        let affiliate_id = req.body.jsonObj[i].affiliate_id;
        let trigger = req.body.jsonObj[i].trigger;
        let type = req.body.jsonObj[i].type;
        await axios({
            method: 'post',
            url: process.env.DEV + '/api/delete_affiliate_trigger',
            headers: {
                "Refersion-Public-Key": req.headers["public-key"],
                "Refersion-Secret-Key": req.headers["secret-key"],
                "Content-Type": "application/json",
            },
            data: {
                affiliate_id,
                trigger,
                type
            }
        })
            .then(function (response) {
                // handle success
                //TODO: Check if the following object is correct then build out the response object to send back from the request.
                console.log(response.data);
            })
            .catch(function (error) {

                console.log(error.response.data.error);
            });



    }
        res.json();

}

module.exports.deletetriggers = deletetriggers;
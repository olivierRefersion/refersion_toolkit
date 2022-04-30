const axios = require("axios");

const deletetriggers = (req, res) => {

    console.log(req.body.jsonObj);
    console.log(req.body.pubKey);
    console.log(req.body.secKey);
    //Take the json object from the frontend request and loop through it
    for (let i = 0; i < req.body.jsonObj.length; i++) {
        let affiliate_id = req.body.jsonObj[i].affiliate_id;
        let trigger = req.body.jsonObj[i].trigger;
        let type = req.body.jsonObj[i].type;
        axios({
            method: 'post',
            url: 'https://www.rfsndev.com/api/delete_affiliate_trigger',
            headers: {
                "Refersion-Public-Key": req.body.pubKey,
                "Refersion-Secret-Key": req.body.secKey,
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
                console.log(response.statusText);
            })
            .catch(function (error) {

                console.log(error);
                // console.log(error);
            });



    }
    res.json();

}

module.exports.deletetriggers = deletetriggers;
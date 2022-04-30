const axios = require("axios");

const sendmanualorders = (req, res) => {

    //Take the json object from the frontend request and loop through it
    for (let i = 0; i < req.body.jsonObj.length; i++) {
        let order_id = req.body.jsonObj[i].order_id;
        let id = req.body.jsonObj[i].affiliate_id;
        let status = req.body.jsonObj[i].status;
        let notes = req.body.jsonObj[i].notes;
        axios({
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
                console.log();
            })
            .catch(function (error) {

                console.log();
                // console.log(error);
            });



    }
    res.json();

}

module.exports.sendmanualorders = sendmanualorders;
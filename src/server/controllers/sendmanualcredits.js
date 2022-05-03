const axios = require("axios");

const sendmanualcredits = async (req, res) => {
    console.log("At the manual credit endpoint");
    let successArray =[]
    let failedCount = 0;
    let successCount = 0;
    //Take the json object from the frontend request and loop through it
    for (let i = 0; i < req.body.jsonObj.length; i++) {

        //Set new variables for the properties on each object to be passed into the data for the Axios call
        let id = req.body.jsonObj[i].id;
        let commission = req.body.jsonObj[i].commission;
        let status = req.body.jsonObj[i].status;
        let currency = req.body.jsonObj[i].currency;
        let notes = req.body.jsonObj[i].notes;

        await axios({
            method: 'post',
            url: 'https://api.refersion.com/v2/conversion/manual_credit',
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
                successArray.push(`Commission of ${commission} ${currency} for affiliate ID ${id} is created. Conversion ID is ${response.data.conversion_id}`);
                successCount ++;
                console.log(successCount);

                // res.send(successCount);
            })
            .catch(function (error) {
                console.log(error.response.data.error);
                failedCount ++;
            });

        }
          //console.log("Done");
          res.write(successArray);
          res.write(failedCount);
          res.end;
    }

module.exports.sendmanualcredits = sendmanualcredits;
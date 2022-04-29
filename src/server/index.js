const express = require("express");
const cookieParser = require('cookie-parser')
const cors = require("cors");
const axios = require("axios");
const apiRoute = require('../server/routes/apiRoutes');
const {response} = require("express");
//let bodyParser = require('body-parser');
// const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/api', apiRoute);
app.use(cookieParser());

const port = process.env.PORT || 4000;


//Credit Manual Credits Endpoint
app.post("/sendmanualcredits",  (req, res) => {

   
    //Take the json object from the frontend request and loop through it
    for (let i = 0; i < req.body.jsonObj.length; i++) {

    
        //Set new variables for the properties on each object to be passed into the data for the Axios call
        let id = req.body.jsonObj[i].id; 
        let commission =  req.body.jsonObj[i].commission;
        let status = req.body.jsonObj[i].status;
        let currency = req.body.jsonObj[i].currency;
        let notes = req.body.jsonObj[i].notes;
        

        axios({
                method: 'post',
                url: 'https://api.refersion.com/v2/conversion/manual_credit',
                headers: {
                    "Refersion-Public-Key": req.body.pubKey,
                    "Refersion-Secret-Key": req.body.secKey,
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                data: {
                    "id": id,
                    "commission": commission,
                    "status": status,
                    "currency":currency,
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
    
})

//Credit Manual Orders Endpoint
app.post("/sendmanualorders",  (req, res) => {


    //Take the json object from the frontend request and loop through it
    for (let i = 0; i < req.body.jsonObj.length; i++) {
        let order_id = req.body.jsonObj[i].order_id;
        let id =  req.body.jsonObj[i].affiliate_id;
        let status = req.body.jsonObj[i].status;
        let notes = req.body.jsonObj[i].notes;
        axios({
            method: 'post',
            url: 'https://www.refersion.com/api/manual_credit_order_id',
            headers: {
                "Refersion-Public-Key": "pub_dbc37e60b31cdaa21e11",
                "Refersion-Secret-Key": "sec_76f6cb125e64c4ec22e5",
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

})

//Delete Triggers Endpoint
app.post("/deletetriggers",  (req, res) => {


    //Take the json object from the frontend request and loop through it
    for (let i = 0; i < jsonObj.length; i++) {
        let affiliate_id = jsonObj[i].affiliate_id;
        let trigger =  jsonObj[i].trigger;
        let type = jsonObj[i].type;
        axios({
            method: 'post',
            url: 'https://www.rfsndev.com/api/delete_affiliate_trigger',
            headers: {
                "Refersion-Public-Key": "pub_0e2f3f67eaacbb4f5f65",
                "Refersion-Secret-Key": "sec_0f9b8df9a51d27f551d1",
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

})

//Edit Affiliates Endpoint
app.post("/editaffiliates",  (req, res) => {


    //Take the json object from the frontend request and loop through it
    for (let i = 0; i < jsonObj.length; i++) {
        let id = jsonObj[i].id;
        let offer =  jsonObj[i].offer;
        let first_name = jsonObj[i].first_name;
        let last_name = jsonObj[i].last_name;
        let email = jsonObj[i].email;
        let company = jsonObj[i].company;
        let address1 = jsonObj[i].address1;
        let address2 = jsonObj[i].address2;
        let city = jsonObj[i].city;
        let state = jsonObj[i].state;
        let zip = jsonObj[i].zip;
        let country = jsonObj[i].country;
        let phone = jsonObj[i].phone;
        axios({
            method: 'post',
            url: 'https://www.rfsndev.com/api/edit_affiliate',
            headers: {
                "Refersion-Public-Key": "pub_0e2f3f67eaacbb4f5f65",
                "Refersion-Secret-Key": "sec_0f9b8df9a51d27f551d1",
                "Content-Type": "application/json",
            },
            data: {
                id,
                offer,
                first_name,
                last_name,
                email,
                company,
                address1,
                address2,
                city,
                state,
                zip,
                country,
                phone
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

})

//Authenticate Endpoint
app.post("/authenticate",  (req, res) => {
//Capture the API keys from the axios frontend call

    //Leverage axios again to send the keys back to Refersion's check_account endpoint
    axios({
        method: 'post',
        url: 'https://www.refersion.com/api/check_account',
        headers: {
            "Refersion-Public-Key": req.body.pubKey,
            "Refersion-Secret-Key": req.body.secKey,
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        data: []

    })
        .then(function (response) {
            //Check to see if response is ok and keys are valid
            console.log(response.status);
            if (response.status === 200) {
                //Second axios call to set the Cookies
                axios({
                    method: 'get',
                    url: 'http://localhost:4000/setcookie',
                    headers: {
                        //"Cookie": req.body.pubKey,
                        // "Refersion-Secret-Key": req.body.secKey,
                        // "Content-Type": "application/json",
                        // "Accept": "application/json",
                        // "Access-Control-Allow-Origin": "*"
                    },
                    //data: {pubKeyCookie : req.body.pubKey}

                })
                    .then(function (response) {
                        //console.log(response)
                })
                    .catch(function (error) {
                    console.log(error);
                    // console.log(error);
                });
                //console.log(req.body.pubKey);
            };
        })
        .catch(function (error) {
            //console.log(error);
            // console.log(error);
        });
    res.send();
    //res.send(response.statusText);
})

//Set Cookie Endpoint
app.get('/setcookie', (req, res) => {
    //const parsedCookie = JSON.parse(JSON.stringify(req.cookies)); // req.body = [Object: null prototype] { title: 'product' }
    //console.log(parsedCookie);
    res.cookie('Pub Key','Added Cookie');
    res.send('Cookie has been saved successfully');
});




// Error Handling
app.use((req, res, next) => {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});


const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})


  

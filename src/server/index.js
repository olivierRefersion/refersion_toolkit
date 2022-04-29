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


app.post("/test",  (req, res) => {

   
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

app.get("/authenticate",  (req, res) => {


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

            if (response.status === 200) {
                axios({
                    method: 'post',
                    url: 'http://localhost:4000/setcookie',
                    headers: {
                        "Refersion-Public-Key": req.body.pubKey,
                        "Refersion-Secret-Key": req.body.secKey,
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    data: {pubKeyCookie : req.body.pubKey}

                })
                    .then(function (response) {
                        console.log(response)
                })
                    .catch(function (error) {
                    console.log(error);
                    // console.log(error);
                });
            }

            //console.log(response.statusText);
            //console.log("Trying to set cookie.")
            //res.cookie("pubKey",req.body.pubKey);
            //res.send('Cookie have been saved successfully');

        })
        .catch(function (error) {
            console.log(error);
            // console.log(error);
        });
    res.cookie(`pubKey`,`this is a pub key`);
    res.send('Cookie has been saved successfully');
    //res.send(response.statusText);

})

app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`,req.body.pubKey);
    res.send('Cookie have been saved successfully');
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


  

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const apiRoute = require('../server/routes/apiRoutes');
let bodyParser = require('body-parser');
// const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json({
    extended: true
}));
app.use(cors());

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//     function logThis(){
//       console.log("this is Logged")
//     };
//     logThis();
// });

app.use('/api', apiRoute)
const port = process.env.PORT || 5000;


app.post("/test",  (req, res) => {

    console.log(req.body.jsonDataFromcsv[1])
    // for (let i = 0; i < req.body.jsonDataFromcsv.length; i++) {
    //     // console.log(jsonObj[0].Order_ID);
    //     // console.log(jsonObj[0].Affiliate_ID);
    //     // console.log(jsonObj[0].Status);
    //     // console.log(jsonObj[0].Notes);
    //     let order_id = jsonObj[i].order_id; 
    //     let id =  jsonObj[i].affiliate_id;
    //     let status = jsonObj[i].status;
    //     let notes = jsonObj[i].notes;
    //     axios({
    //             method: 'post',
    //             url: '//api.refersion.com/v2/conversion/manual_credit',
    //             headers: {
    //                 "Refersion-Public-Key": req.body.pubkey,
    //                 "Refersion-Secret-Key": req.body.secKey,
    //                 "Content-Type": "application/json",
    //                 "Access-Control-Allow-Origin": "*"
    //             },
    //             data: {
    //                 "id":"6498741",
    //                 "commission":1,
    //                 "status":"PENDING",
    //                 "currency":"USD",
    //                 "notes":"Testing"
    //             }   
    //     })
    //     .then(function (response) {
    //     // handle success
    //         console.log(`For ${order_id} the Post is ${response.statusText}. ${response.data.message}`);
    //     })
    //     .catch(function (error) {
    //         console.log(`For ${order_id}, ${error.response.data.error}`);
    //         // console.log(error);
    //     });
            


    // }
    
    
    
    
    
    
    //TODO: Put this in a loop
    //
    //   axios({
    //     method: 'post',
    //     url: '//api.refersion.com/v2/conversion/manual_credit',
    //     headers: {
    //         "Refersion-Public-Key": req.body.pubkey,
    //         "Refersion-Secret-Key": req.body.secKey,
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*"
    //     },
    //     data: {
    //         "id":"6498741",
    //         "commission":1,
    //         "status":"PENDING",
    //         "currency":"USD",
    //         "notes":"Testing"
    //     }   
    //     })
    //     .then(function (response) {
    //     // handle success
    //     console.log(response);
    //     })
    //     .catch(function (error) {

    //         console.log(error);
    //         // console.log(error);
    //     });
    
    // console.log(req.body.pubKey);
    // console.log(req.body.secKey);
    // console.log(req.body.jsonDataFromcsv);

    
    res.json(req.body.jsonDataFromcsv);
    

    
    // res.json();
})

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

// function sendManualCredits(){

//   axios({
//               method: 'post',
//               url: '//api.refersion.com/v2/conversion/manual_credit',
//               headers: {
//                   "Refersion-Public-Key": "pub_380e6cb639361b407137",
//                   "Refersion-Secret-Key": "sec_b76a177cf97129732e01",
//                   "Content-Type": "application/json",
//                   "Access-Control-Allow-Origin": "*"
//               },
//               data: {
//                   "id":"6498741",
//                   "commission":1,
//                   "status":"PENDING",
//                   "currency":"USD",
//                   "notes":"Testing"
//               }   
//               })
//               .then(function (response) {
//               // handle success
//               console.log(response);
//               })
//               .catch(function (error) {

//                   console.log(error);
//                   // console.log(error);
//               });
// };

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

//sendManualCredits();



  

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const apiRoute = require('../server/routes/apiRoutes');
let bodyParser = require('body-parser');
// const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
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
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

app.post("/test",  (req, res) => {
    res.send("we got" + req.body + "from the motherfucking front End");
    console.log("We got  " + req.body + " from the back!")
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



  

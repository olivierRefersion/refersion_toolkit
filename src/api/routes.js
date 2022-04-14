import axios from 'axios';



export function gotFromTheFront(apiKey){
    console.log("Got" + apiKey + "from the front");
}

// export function sendManualCredits(pubKey, secKey){

//     axios({
//                 method: 'post',
//                 url: '//api.refersion.com/v2/conversion/manual_credit',
//                 headers: {
//                     "Refersion-Public-Key": pubKey,
//                     "Refersion-Secret-Key": secKey,
//                     "Content-Type": "application/json",
//                     "Access-Control-Allow-Origin": "*"
//                 },
//                 data: {
//                     "id":"6498741",
//                     "commission":1,
//                     "status":"PENDING",
//                     "currency":"USD",
//                     "notes":"Testing"
//                 }   
//                 })
//                 .then(function (response) {
//                 // handle success
//                 console.log(response.data);
//                 })
//                 .catch(function (error) {

//                     console.log(error.response.data.error);
//                     // console.log(error);
//                 });
//  };



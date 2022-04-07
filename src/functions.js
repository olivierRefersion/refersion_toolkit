const csvtojson=require('csvtojson');
const axios = require('axios');
const csvFilePath='ManualOrders.csv'


// export function sendManualOrders(){
//     csvtojson()
//     .fromFile(csvFilePath)
//     .then((jsonObj)=>{
//     // console.log(jsonObj);
//     for (let i = 0; i < jsonObj.length; i++) {
//         // console.log(jsonObj[0].Order_ID);
//         // console.log(jsonObj[0].Affiliate_ID);
//         // console.log(jsonObj[0].Status);
//         // console.log(jsonObj[0].Notes);
//         let order_id = jsonObj[i].order_id; 
//         let id =  jsonObj[i].affiliate_id;
//         let status = jsonObj[i].status;
//         let notes = jsonObj[i].notes;
//         axios({
//             method: 'post',
//             url: 'https://www.refersion.com/api/manual_credit_order_id',
//             headers: {
//                 "Refersion-Public-Key": "pub_dbc37e60b31cdaa21e11",
//                 "Refersion-Secret-Key": "sec_76f6cb125e64c4ec22e5",
//                 "Content-Type": "application/json"
//             },
//             data: {
//                 order_id,
//                 id,
//                 status,
//                 notes
//             }   
//             })
//             .then(function (response) {
//             // handle success
//             console.log(`For ${order_id} the Post is ${response.statusText}. ${response.data.message}`);
//             })
//             .catch(function (error) {
                
//                 console.log(`For ${order_id}, ${error.response.data.error}`);
//                 // console.log(error);
//             });
//         }
//     })
//     csvtojson();

// }


// export function sendManualCommissions(){


// }
// csvtojson()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//     // console.log(jsonObj);
//     for (let i = 0; i < jsonObj.length; i++) {
//         // console.log(jsonObj[0].Order_ID);
//         // console.log(jsonObj[0].Affiliate_ID);
//         // console.log(jsonObj[0].Status);
//         // console.log(jsonObj[0].Notes);
//         let id = jsonObj[i].order_id; 
//         let commission =  jsonObj[i].affiliate_id;
//         let status = jsonObj[i].status;
//         let currency = jsonObj[i].notes;
//         let notes = jsonObj[i].notes;
//         axios({
//             method: 'post',
//             url: 'https://www.refersion.com/api/manual_credit_order_id',
//             headers: {
//                 "Refersion-Public-Key": "pub_dbc37e60b31cdaa21e11",
//                 "Refersion-Secret-Key": "sec_76f6cb125e64c4ec22e5",
//                 "Content-Type": "application/json"
//             },
//             data: {
//                 order_id,
//                 id,
//                 status,
//                 notes
//             }   
//             })
//             .then(function (response) {
//             // handle success
//             console.log(`For ${order_id} the Post is ${response.statusText}. ${response.data.message}`);
//             })
//             .catch(function (error) {
                
//                 console.log(`For ${order_id}, ${error.response.data.error}`);
//                 // console.log(error);
//             });
            


//       }
// })


// csv();


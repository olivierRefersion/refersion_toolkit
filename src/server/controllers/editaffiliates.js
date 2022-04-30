const axios = require("axios");

const editaffiliates = (req, res) => {

    //Take the json object from the frontend request and loop through it
    for (let i = 0; i < jsonObj.length; i++) {
        let id = jsonObj[i].id;
        let offer = jsonObj[i].offer;
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

}

module.exports.editaffiliates = editaffiliates;
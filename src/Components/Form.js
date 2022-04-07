import axios from "axios";
import React, { Component } from "react";
import { sendManualOrders } from "../functions";
const csvtojson=require('csvtojson');
const csvFilePath='test.csv'

const handleChange = (event) => {
    // setformValue({
    //   ...formValue,
    //   [event.target.name]: event.target.value
    // });
} 


const handleSubmit = async() => {
    // store the states in the form data
    // const loginFormData = new FormData();
    // loginFormData.append("username", formValue.email)
    // loginFormData.append("password", formValue.password)
  
    // try {
    //   // make axios post request
    //   const response = await axios({
    //     method: "post",
    //     url: "/api/login",
    //     data: loginFormData,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    // } catch(error) {
    //   console.log(error)
    // }
    csvtojson()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    // console.log(jsonObj);
    for (let i = 0; i < jsonObj.length; i++) {
        // console.log(jsonObj[0].Order_ID);
        // console.log(jsonObj[0].Affiliate_ID);
        // console.log(jsonObj[0].Status);
        // console.log(jsonObj[0].Notes);
        let order_id = jsonObj[i].order_id; 
        let id =  jsonObj[i].affiliate_id;
        let status = jsonObj[i].status;
        let notes = jsonObj[i].notes;
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
            console.log(`For ${order_id} the Post is ${response.statusText}. ${response.data.message}`);
            })
            .catch(function (error) {
                
                console.log(`For ${order_id}, ${error.response.data.error}`);
                // console.log(error);
            });
        }
    })
    csvtojson();
}

class Form extends Component{
    state = {
        pubKey: '',
        secKey: '',
        csv: {},
        selectedFile: null
    }

    render(){
        return(
            <form onSubmit={handleSubmit}>
      <p>Upload Form</p>
      <input
        type="input"
        name="pubKey"
        placeholder="Add the Public Key"
        value={this.state.pubKey}
        onChange={handleChange}
      />
      <input
        type="input"
        name="secKey"
        placeholder="add the Secret Key"
        value={this.state.secKey}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Submit
      </button>
    </form>
        );
    }
}


export default Form;
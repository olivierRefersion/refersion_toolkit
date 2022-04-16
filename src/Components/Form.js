import axios from "axios";
import React, { Component } from "react";
import { sendManualOrders } from "../functions";
import { useState } from "react";
import { readRemoteFile } from 'react-papaparse'
import CSV from 'papaparse';
import {gotFromTheFront as gotThis} from "../api/routes";
//import {sendManualCredits as sendCredits} from "../API/routes"

const csvFilePath = 'test.csv'

export default class Form extends React.Component {
  state = {
    pubKey: null,
    secKey: null,
    selectedFile: null,
    jsonDataFromcsv: null,
    response: null  //might need to rename this
  }

  handleChange = event => {
    //this.setState({ name: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  onFileChange = event => {

    // Update the state
    this.setState({ selectedFile: event.target.files[0] });

  };

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:4000/test', this.state.pubKey)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            });
    
    //this.setState({ response: state.res }) NEED TO UNCOMMENT THIS TO SET STATE FOR RESULTS
    // const formAuthentication = {
    //   pubKey: this.state.pubKey,
    //   secKey: this.state.secKey,
    // };

    // console.log(this.state.pubKey);
    // console.log(this.state.secKey);

    
    console.log(this.state.selectedFile);
    const objectData = CSV.parse(this.state.selectedFile, {complete: (results) => {
      this.setState({json: results.data})
      console.log("Finished:", results.data);
    }});
    
    
    setTimeout( () => {
      
      console.log(this.state.json);
      console.log(this.state.pubKey);
      console.log(this.state.secKey);
    
    }, 3000)


    
    // //I need a Promise I think.
      
    // );
    //console.log(this.state.pubKey);
    //console.log(this.state.secKey);
    // for (let i = 0; i < dataReadyToBeSent.length; i++) {
        //     // console.log(dataReadyToBeSent[0].Order_ID);
        //     // console.log(dataReadyToBeSent[0].Affiliate_ID);
        //     // console.log(dataReadyToBeSent[0].Status);
        //     // console.log(dataReadyToBeSent[0].Notes);
        //     let order_id = dataReadyToBeSent[i].order_id; 
        //     let id =  dataReadyToBeSent[i].affiliate_id;
        //     let status = dataReadyToBeSent[i].status;
        //     let notes = dataReadyToBeSent[i].notes;
        //     axios({
        //         method: 'post',
        //         url: 'https://www.refersion.com/api/manual_credit_order_id',
        //         headers: {
        //             "Refersion-Public-Key": this.state.pubKey,
        //             "Refersion-Secret-Key": this.state.secKey,
        //             "Content-Type": "application/json"
        //         },
        //         data: {
        //             order_id,
        //             id,
        //             status,
        //             notes
        //         }   
        //         })
        //         .then(function (response) {
        //         // handle success
        //         console.log(`For ${order_id} the Post is ${response.statusText}. ${response.data.message}`);
        //         })
        //         .catch(function (error) {

        //             console.log(`For ${order_id}, ${error.response.data.error}`);
        //             // console.log(error);
        //         });
        // };


    };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Public Key
            <input type="text" name="pubKey" onChange={this.handleChange} />
          </label>
          <label>
            Secret Key
            <input type="text" name="secKey" onChange={this.handleChange} />
          </label>
          <input type="file" onChange={this.onFileChange.bind(this)} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
















import axios from "axios";
import csvtojson from "csvtojson";
import React, { Component } from "react";
import { sendManualOrders } from "../functions";
import { useState } from "react";
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
    
    //Take the submitted file and change it to text.
    this.state.selectedFile.text()
      .then((result) => {

        //Use the csvtojson module to change the previous string to a json object.
        csvtojson().fromString(result).then((jsonObj)=>{
            console.log(jsonObj)
            
            //Axios call to our backend endpoint with the Public Key, Secret Key and Json Object in the body of the request.
            axios.post('http://localhost:5000/test', {
              pubKey: this.state.pubKey,
              secKey: this.state.secKey,
              jsonObj
            })
            .then((res) => {
              console.log(res.data)
            })
            .catch((error) => {
              console.log(error)
            });
          });
    })
      
  }
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

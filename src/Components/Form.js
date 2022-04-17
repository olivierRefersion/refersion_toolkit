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

    //PARSER
    //console.log(this.state.selectedFile);
    const objectData = CSV.parse(this.state.selectedFile, {complete: (results) => {
      this.setState({jsonDataFromcsv: results.data})
      //console.log("Finished parsing:", results.data)
      //console.log(this.state.jsonDataFromcsv);
    }});






    setTimeout( () => {
      
      //console.log(this.state.jsonDataFromcsv);
      
      axios.post('http://localhost:5000/test', {
        pubKey: this.state.pubKey,
        secKey: this.state.secKey,
        jsonDataFromcsv: this.state.jsonDataFromcsv

      })
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

      //PARSER
      // console.log(this.state.selectedFile);
      // const objectData = CSV.parse(this.state.selectedFile, {complete: (results) => {
      //   this.setState({json: results.data})
      //   console.log("Finished parsing:", results.data);
      // }});
      
      
      
        
        //console.log(this.state.json);
        //console.log(this.state.pubKey);
        //console.log(this.state.secKey);
        //console.log(this.state.jsonDataFromcsv);
    }, 3000)


    
    // //I need a Promise I think.
      

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

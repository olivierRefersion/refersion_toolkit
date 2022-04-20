import axios from "axios";
import React, { Component } from "react";
// import { sendManualOrders } from "../functions";
// import { useState } from "react";
import { Form, Button } from '.';
//import {sendManualCredits as sendCredits} from "../API/routes"

export default class AuthForm extends React.Component {
  state = {
    pubKey: null,
    secKey: null,
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
    console.log(this.state)
    /*
    axios.post('http://localhost:3000/test', {
      pubKey: this.state.pubKey,
      secKey: this.state.secKey,
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    */
  }
  render() {
    return (
      <main>
        <div className="container">
          <div>
            <Form onSubmit={this.handleSubmit}>
              <div className="formItem">
                <label>Public Key</label>
                <input type="text" name="pubKey" onChange={this.handleChange} />
              </div>
              <div className="formItem">
                <label>Secret Key</label>
                <input type="text" name="secKey" onChange={this.handleChange} />
              </div>
              <Button type="submit" label="Submit" classes='primary' size='small'></Button>
            </Form>
          </div>
        </div>
      </main>
    )
  }
}

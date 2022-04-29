import axios from "axios";
import React, { Component } from "react";
import { Form, Button } from '.';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

export default class AuthForm extends React.Component {
//Setting state
  state = {
    pubKey: null,
    secKey: null,
  }

  handleChange = event => {
    //this.setState({ name: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  //Function to add session storage values after authentication.
  makeLocalStorageValues = () => {
    const { pubKey, secKey } = this.state;
    sessionStorage.setItem('pk', this.state.pubKey);
    sessionStorage.setItem('sk', this.state.secKey);
    alert("Your session is authenticated. Please proceed with file upload and processing.")

  };
  onFileChange = event => {

    // Update the state
    this.setState({ selectedFile: event.target.files[0] });

  };

  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.state)

    //Post Pub and Sec key to our authentication endpoint.
    axios.post('http://localhost:4000/authenticate', {
      pubKey: this.state.pubKey,
      secKey: this.state.secKey,
    })
      .then((res) => {
        console.log(res.data)

        //Check if authentication endpoint has validated the submitted keys
        if (res.data == "OK"){
          //If submitted keys are valid then add to session storage.
          this.makeLocalStorageValues();
        } else {

          alert("Session could not be authenticated. Please check your keys.")
        }

      })
      .catch((error) => {
        console.log(error)
      })

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

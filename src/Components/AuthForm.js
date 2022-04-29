import axios from "axios";
import React, { Component, useContext, useState } from "react";
import { Form, Button } from '.';
import { Auth } from '../.';
// import { sendManualOrders } from "../functions";
// import { useState } from "react";


/**
 * Main application header that can have a state of logged in or not logged in
 */

//import {sendManualCredits as sendCredits} from "../API/routes"

export const AuthForm = () => {

  const authContext = useContext(Auth);

  const [state, setState] = useState({
    pubKey: null,
    secKey: null,
    response: null  //might need to rename this
  })

  const handleChange = event => {
    //this.setState({ name: event.target.value });
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onFileChange = event => {

    // Update the state
    setState({ ...state, selectedFile: event.target.files[0] });

  };

  const handleSubmit = event => {

    event.preventDefault();
    console.log(state)
    document.getElementById('auth-form').reset();
    document.getElementById('close').click()
    authContext.setAuthenticated(true)
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

    return (
      <main>
          <div>
            <Form onSubmit={handleSubmit} autoComplete='off' id="auth-form">
              <div className="authFormItem">
                <input type="text" name="pubKey" onChange={handleChange} />
                <label>Public Key</label>
              </div>
              <div className="authFormItem">
                <input type="text" name="secKey" onChange={handleChange} />
                <label>Secret Key</label>
              </div>
              <Button type="submit" label="Submit" classes='primary' size='small'></Button>
            </Form>
          </div>
      </main>
    )
  }

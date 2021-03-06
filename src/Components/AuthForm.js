import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Form, Button, Alert } from '.';
import { Auth } from '../.';

export const AuthForm = () => {

  const authContext = useContext(Auth);

  let initialState = {
    pubKey: '',
    secKey: '',
  };

  const [state, setState] = useState(initialState)

  let initialStatus = {
    success: '',
    message: ''
  };

  const [status, setStatus] = useState(initialStatus)

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const newLoginUser = () => {
    const obfuscatedPubKey = state.pubKey.replace(/(pub_).*(\w{4})/g, "$1****************$2")
    authContext.setUser(obfuscatedPubKey)
    authContext.setAuthenticated(true)
  }

  const handleSubmit = event => {

    event.preventDefault();
    setStatus({ success: 'false', message: 'Sorry, there was an issue completing your request. Try again later' })

    // Post Pub and Sec key to our authentication endpoint.
    axios.post('/authenticate', {
      pubKey: state.pubKey,
      secKey: state.secKey,
    })
      .then((res) => {

        // Check if authentication endpoint has validated the submitted keys
        if (res.data.status === 'success') {

          // If submitted keys are valid then add to session storage.
          const authObj = {...state, time: new Date().getTime()};
          sessionStorage.setItem('__auth', btoa(JSON.stringify(authObj)));

          setStatus({ success: 'true', message: 'Success! your keys have been authenticated.' })
          newLoginUser()
          document.getElementById('auth-form').reset();

          setTimeout(() => {
            document.getElementById('close').click()
          }, 2000)
           
        } else {
          setStatus({ success: 'false', message: res.data.message })
        }

      })
      .catch((error) => {
        console.log(error)
        setStatus({ success: 'false', message: 'Sorry, there was an issue completing your request. Try again later' })
      })
  }

  useEffect(() => {
    // Clears out API keys if the modal is simply closed
    window.addEventListener("modalClosed", () => {
      document.getElementById('auth-form').reset();
      setState(initialState)
      setStatus(initialStatus)
    });
  }, [])

  return (
    <main>
      <div>
        <Form onSubmit={handleSubmit} autoComplete='off' id="auth-form">
          {status.success === 'true' && <Alert type='success' children={status.message} />}
          {status.success === 'false' && <Alert type='error' children={status.message} />}
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

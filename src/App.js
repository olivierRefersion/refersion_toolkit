import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout.jsx'
import Index from './routes/index';
import NotFound from './routes/NotFound';
import { UploadForm, titleMap, Results } from "./components";
import { Auth } from '.';

export default function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ user, setUser ] = useState('');
  let globalStateObject = {authenticated: loggedIn, setAuthenticated: setLoggedIn, user: user, setUser: setUser};

  let loginUser = () => {
    let authenticatedUser = JSON.parse(atob(sessionStorage.getItem('__auth')));
    const pubKey = authenticatedUser.pubKey;
    const obfuscatedPubKey = pubKey.replace(/(pub_).*(\w{4})/g, "$1****************$2")
    setUser(obfuscatedPubKey)
    setLoggedIn(true)
  }

  useEffect(() => {
    if(sessionStorage.getItem('__auth') !== null) {
      loginUser()
    }
  },[])

  return (
    <Auth.Provider value={globalStateObject}>
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Index />} />
            <Route exact path="/bulk-manual-commission-credits" >
              <Route index element={<UploadForm data={titleMap['/bulk-manual-commission-credits']} />} />
              <Route path="results" element={<Results />} />
            </Route>

            <Route exact path="/bulk-manual-order-credits" >
              <Route index element={<UploadForm data={titleMap['/bulk-manual-order-credits']} />} />
              <Route path="results" element={<Results />} />
            </Route>

            <Route exact path="/bulk-edit-affiliates"  >
              <Route index element={<UploadForm data={titleMap['/bulk-edit-affiliates']} />} />
              <Route path="results" element={<Results />} />
            </Route>

            <Route exact path="/bulk-delete-triggers"  >
              <Route index element={<UploadForm data={titleMap['/bulk-delete-triggers']} />} />
              <Route path="results" element={<Results />} />
            </Route>

            <Route exact path="/bulk-upload-orders">
              <Route index element={<UploadForm data={titleMap['/bulk-upload-orders']} />} />
              <Route path="results" element={<Results />} />
            </Route>

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </Auth.Provider>
  )
}
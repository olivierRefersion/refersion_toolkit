import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout'
import Index from './routes';
import NotFound from './routes/NotFound';
import { UploadForm, titleMap } from "./components";
import { Auth } from '.';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn)

  return (
    <Auth.Provider value={{authenticated: loggedIn, setAuthenticated: setLoggedIn}}>
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Index />} />
            <Route exact path="/bulk-manual-commission-credits" element={<UploadForm data={titleMap['/bulk-manual-commission-credits']} />} />
            <Route exact path="/bulk-manual-order-credits" element={<UploadForm data={titleMap['/bulk-manual-order-credits']} />} />
            <Route exact path="/bulk-edit-affiliates" element={<UploadForm data={titleMap['/bulk-edit-affiliates']} />} />
            <Route exact path="/bulk-delete-triggers" element={<UploadForm data={titleMap['/bulk-delete-triggers']} />} />
            <Route exact path="/bulk-upload-orders" element={<UploadForm data={titleMap['/bulk-upload-orders']} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </Auth.Provider>
  )
}


import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout.jsx'
import Index from './routes/index';
import NotFound from './routes/NotFound';
import { UploadForm } from "./components";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route exact path="/bulk-manual-commission-credits" element={<UploadForm />} />
        <Route exact path="/bulk-manual-order-credits" element={<UploadForm />} />
        <Route exact path="/bulk-edit-affiliates" element={<UploadForm />} />
        <Route exact path="/bulk-delete-triggers" element={<UploadForm />} />
        <Route exact path="/bulk-upload-orders" element={<UploadForm />} />
      </Route>
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>
  )
}




















// import './App.css';
// import Form from './components/Form';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <Form/>
//   );
// }

// export default App;

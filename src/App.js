import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout'
import Index from './routes';
import NotFound from './routes/NotFound';
import { UploadForm, titleMap } from "./components";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route exact path="/bulk-manual-commission-credits" element={<UploadForm data={titleMap['/bulk-manual-commission-credits']}/>} />
        <Route exact path="/bulk-manual-order-credits" element={<UploadForm data={titleMap['/bulk-manual-order-credits']}/>} />
        <Route exact path="/bulk-edit-affiliates" element={<UploadForm data={titleMap['/bulk-edit-affiliates']}/>} />
        <Route exact path="/bulk-delete-triggers" element={<UploadForm data={titleMap['/bulk-delete-triggers']}/>} />
        <Route exact path="/bulk-upload-orders" element={<UploadForm data={titleMap['/bulk-upload-orders']}/>} />
      </Route>
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>
  )
}




















// import './App.css';
// import Form from './Components/Form';
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

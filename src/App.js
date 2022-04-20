import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout'
import Index from './routes';
import BulkManualCommissionCredits from './routes/BulkManualCommissionCredits';
import BulkManualOrderCredits from './routes/BulkManualOrderCredits';
import BulkEditAffiliates from './routes/BulkEditAffiliates';
import BulkDeleteTriggers from './routes/BulkDeleteTriggers';
import BulkUploadOrders from './routes/BulkUploadOrders';
import NotFound from './routes/NotFound';

// Olivier's includes
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import CreateUser from "./components/create-user.component";
import Form from "./components/Form.js";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route exact path="/bulk-manual-commission-credits" element={<BulkManualCommissionCredits />} />
        <Route exact path="/bulk-manual-order-credits" element={<BulkManualOrderCredits />} />
        <Route exact path="/bulk-edit-affiliates" element={<BulkEditAffiliates />} />
        <Route exact path="/bulk-delete-triggers" element={<BulkDeleteTriggers />} />
        <Route exact path="/bulk-upload-orders" element={<BulkUploadOrders />} />   
        <Route exact path="/form" element={<Form/>} />
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

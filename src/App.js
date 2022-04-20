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
      </Route>
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>
  )
}
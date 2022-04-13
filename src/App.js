import './App.css';
import Layout from './components/Layout'
import Index from './components/Index';
import BulkManualCommissionCredits from './components/BulkManualCommissionCredits';
import BulkManualOrderCredits from './components/BulkManualOrderCredits';
import BulkEditAffiliates from './components/BulkEditAffiliates';
import BulkDeleteTriggers from './components/BulkDeleteTriggers';
import BulkUploadOrders from './components/BulkUploadOrders';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
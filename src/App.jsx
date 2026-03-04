import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Dashboard from "./Pages/Dshboard/Dashboard"; 
import Applications from "./Pages/Applications/Applications";    
import Debts from "./Pages/Debts/Debts";
import Customers from "./Pages/Customers/Customers";
import Services from "./Pages/Services/Services";
import Payments from "./Pages/Payments/Payments";
import Clinics from "./Pages/Clinics/Clinics";
import Reports from "./Pages/Reports/reports";
import Audit from "./Pages/Audit/Audit";
import Notifications from "./Pages/Notifications/Notifications";
import Setting from "./Pages/Setting/Setting";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="Applications" element={<Applications />} />
        <Route path="Debts" element={<Debts />} />
        <Route path="Customers" element={<Customers />} />
        <Route path="Clinics" element={<Clinics />} />
        <Route path="Services" element={<Services />} />
        <Route path="Payments" element={<Payments />} />
        <Route path="Reports" element={<Reports />} />
        <Route path="Audit" element={<Audit />} />
        <Route path="Notifications" element={<Notifications />} />
        <Route path="Setting" element={<Setting />} />
      </Route>  
    </Routes>
  );
}
export default App;
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Passengers from "../pages/Passengers/Passengers";
import Colleagues from "../pages/Colleagues/Colleagues";
import Companies from "../pages/Companies/Companies";
import Accountent from "../pages/Accountent/Accountent";
import TouristCenters from "../pages/TouristCenters/TouristCenters";
import FollowUps from "../pages/FollowUps/FollowUps";
import FinancialReports from "../pages/FinancialReports/FinancialReports";
import Services from "../pages/Services/Services";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/colleagues" element={<Colleagues />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/accountent" element={<Accountent />} />
        <Route path="/tourist-centers" element={<TouristCenters />} />
        <Route path="/follow-ups" element={<FollowUps />} />
        <Route path="/financial-reports" element={<FinancialReports />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

import KanbasNavigation from "./Naviagtion";
import { Route, Routes, Navigate } from "react-router";
import Dashboard from "./Dasboard";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./Courses";

function Kanbas() {
    return (
      <div id="flexlife">
          <KanbasNavigation/>

        <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
        </Routes>
        </div>
      </div>
  );}
  export default Kanbas;
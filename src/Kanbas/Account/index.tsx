import Signin from "../../Users/SignIn";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "../../Users/Profile";
export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
        setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input value={user.username} onChange={(e) => setUser({
          ...user, username: e.target.value })} />
      <input value={user.password} onChange={(e) => setUser({
          ...user, password: e.target.value })} />
      <button onClick={signup}> Signup </button>
      <h1>Have an account <Link to="/Kanbas/Account/Signin">Sign In</Link></h1>
    </div>
  );
}

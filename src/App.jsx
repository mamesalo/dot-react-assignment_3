import React, { useState } from "react";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import User from "./components/UserDashboard";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [type, settype] = useState(false);
  const render = () => {
    if (!isLoggedIn) {
      return <Login onLogin={setisLoggedIn} setType={settype} />;
    } else if (isLoggedIn && type == "admin") {
      return <AdminDashboard onLogout={logout} />;
    } else if (isLoggedIn && type == "user") {
      return <User onLogout={logout} />;
    }
  };
  const logout = () => {
    setisLoggedIn(false);
    settype("");
  };
  return <div>{render()}</div>;
};

export default App;

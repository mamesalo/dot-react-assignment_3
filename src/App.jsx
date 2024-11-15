import React, { useState } from "react";
import Login from "./components/Login";
import Admin from "./components/Admin";
import User from "./components/user";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [type, settype] = useState(false);
  const render = () => {
    if (!isLoggedIn) {
      return <Login onLogin={setisLoggedIn} setType={settype} />;
    } else if (isLoggedIn && type == "admin") {
      return <Admin onLogout={logout} />;
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

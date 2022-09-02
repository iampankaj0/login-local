import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import HomePage from "./components/HomePage.js";
import Login from "./components/Login";
import UserContext from "./context/UserContext";

const App = () => {
  const [user, setLoginUser] = useState({});

  // set user in localStorage
  const addUserLocal = (user) => {
    localStorage.setItem("myUser", JSON.stringify(user));
    setLoginUser(user);
  };

  //get user from localStorage
  // useEffect(() => {
  //   setLoginUser(JSON.parse(localStorage.getItem("myUser")));
  // }, []);
  useEffect(() => {
    setLoginUser(localStorage.getItem("myUser"));
  }, []);

  console.log("useruseruser" + user);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {user && user.id ? (
            <Home users={user} addUserLocal={addUserLocal} />
          ) : (
            <Login users={user} addUserLocal={addUserLocal} />
          )}
        </Route>
        <Route exact path="/home">
          <HomePage users={user} addUserLocal={addUserLocal} />
        </Route>
        <Route exact path="/login">
          {user.id && user ? (
            <Home users={user} addUserLocal={addUserLocal} />
          ) : (
            <Login users={user} addUserLocal={addUserLocal} />
          )}
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;

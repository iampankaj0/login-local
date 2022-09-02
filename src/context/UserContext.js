import React, { createContext, useEffect, useState } from "react";

export const activeUser = createContext();

//Get user form localStorage
const getUserLocal = () => {
  let user = localStorage.getItem("activeUser");

  if (user) {
    return JSON.parse(localStorage.getItem("activeUser"));
  } else {
    return [];
  }
};

const UserContext = (props) => {
  const [user, setUser] = useState(getUserLocal());

  // set Item in localStorage
  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(user));
  }, [user]);

  return (
    <activeUser.Provider value={[user, setUser]}>
      {props.children}
    </activeUser.Provider>
  );
};

export default UserContext;

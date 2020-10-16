import React, { createContext } from "react";

export const UserContext = createContext({
  user: null,
  update: () => {},
});

const getUsernameFromToken = () => {
  let token = localStorage.getItem("userToken");
  return token ? token.split(".")[1].atob() : null;
};

export default UserContext;

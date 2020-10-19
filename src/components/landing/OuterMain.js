import React from "react";
import UserContext from "../../context/user.context";

const OuterMain = () => {
  const { user, updateUser } = useContext(UserContext);
  const getUsernameFromToken = () => {
    let token = localStorage.getItem("userToken");
    if (token) {
      updateUser(JSON.parse(atob(token.split(".")[1])));
    }
    return token ? JSON.parse(atob(token.split(".")[1])).username : null;
  };

  const checkIn = () => {
    let token = localStorage.getItem("userToken");
  };

  useEffect(() => updateUser(getUsernameFromToken), []);

  return <div></div>;
};

export default OuterMain;

import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/user.context";
import Disconnected from "./Disconnected";

import Main from "../main/Main";
import Welcome from "../welcome/Welcome";
import { login } from "../../api/api";

const Landing = () => {
    const [loginState, setLoginState] = useState("pending");
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

        alert("test");
    };

    const renderLanding = () => {
        switch (loginState) {
            case "pending":
                return <Disconnected checkIn={checkIn} />;
                break;
            case "in":
                return <Main />;
                break;
            case "out":
                return <Welcome />;
                break;
            default:
                return null;
                break;
        }
    };

    return <div>{renderLanding()}</div>;
};

export default Landing;

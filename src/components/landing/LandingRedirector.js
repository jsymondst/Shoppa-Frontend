import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../../context/user.context";
import Disconnected from "./Disconnected";
import { fetchGetWithToken, API_URL } from "../../api/api";

import Main from "../main/Main";
import Welcome from "../welcome/Welcome";

const LandingRedirector = () => {
    const [loginState, setLoginState] = useState("pending");
    const { user, userControls } = useContext(UserContext);
    // const getUsernameFromToken = () => {
    //     let token = localStorage.getItem("userToken");
    //     if (token) {
    //         updateUser(JSON.parse(atob(token.split(".")[1])));
    //     }
    //     return token ? JSON.parse(atob(token.split(".")[1])).username : null;
    // };

    const checkIn = () => {
        let token = localStorage.getItem("userToken");
        if (token) {
            fetchGetWithToken("checkin")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.user) {
                        userControls.updateUser(data.user.username);
                        setLoginState("in");
                    } else {
                        userControls.updateUser(null);
                        setLoginState("out");
                    }
                });
        } else {
            fetch(API_URL).then(() => {
                userControls.updateUser(null);
                setLoginState("out");
            });
        }
    };

    useEffect(() => checkIn(), [user]);

    const renderLanding = () => {
        switch (loginState) {
            case "pending":
                return <Disconnected checkIn={checkIn} />;
            case "in":
                return <Main />;
            case "out":
                return <Welcome />;
            default:
                return null;
        }
    };

    const redirector = () => {
        switch (loginState) {
            case "pending":
                return <Disconnected checkIn={checkIn} />;
            case "in":
                return <Redirect to={"/lists"} />;
            case "out":
                return <Redirect to={"/login"} />;
            default:
                return null;
        }
    };

    return <div>{redirector()}</div>;
};

export default LandingRedirector;

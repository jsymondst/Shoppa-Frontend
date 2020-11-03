import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Button } from "semantic-ui-react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import UserContext from "./context/user.context";
import Landing from "./components/landing/Landing";
import LandingRedirector from "./components/landing/LandingRedirector";
import Main from "./components/main/Main";

const App = () => {
    // user context controls
    const [user, setUser] = useState(null);
    const updateUser = (username) => setUser(username);
    const getUsernameFromToken = () => {
        const token = localStorage.getItem("userToken");
        if (token) {
            setUser(JSON.parse(atob(token.split(".")[1])).username);
        }
    };
    useEffect(() => getUsernameFromToken(), []);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("userToken");
        window.location.href = "/";
    };

    const userContextValue = {
        user,
        userControls: {
            updateUser,
            handleLogout,
        },
    };

    const SomeGubbins = () => {
        return <h3>Gubbins!</h3>;
    };

    return (
        <UserContext.Provider value={userContextValue}>
            <Router>
                {/* <Landing /> */}
                <Route exact path="/" render={() => <LandingRedirector />} />
                <Route
                    path={`/lists`}
                    render={(routerProps) => <Main {...routerProps} />}
                />
                <Route path="/login" render={() => <Welcome />} />
            </Router>
        </UserContext.Provider>
    );
};

export default App;

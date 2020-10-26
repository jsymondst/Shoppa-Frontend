import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "semantic-ui-react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import UserContext from "./context/user.context";
import Landing from "./components/landing/Landing";

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
                <Landing />
                <Route path="/gubs" component={SomeGubbins} />
            </Router>
        </UserContext.Provider>
    );
};

export default App;

import React, { useEffect, useState } from "react";
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

    return (
        <UserContext.Provider value={userContextValue}>
            {/* {user ? <p>{`welcome, ${user}`}</p> : null} */}
            {/* <Welcome /> */}
            {/* <Button onClick={handleLogout} content="logout" /> */}
            <Landing />
        </UserContext.Provider>
    );
};

export default App;

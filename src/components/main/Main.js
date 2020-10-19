import React, { useContext } from "react";
import { Button, Icon } from "semantic-ui-react";
import UserContext from "../../context/user.context";
import { fetchGetWithToken } from "../../api/api";

const Main = () => {
    const { user, userControls } = useContext(UserContext);

    const listIndex = () => {
        fetchGetWithToken("lists")
            .then((res) => res.json())
            .then(console.log);
    };

    return (
        <div>
            <h1>{`Welcome, ${user}`}</h1>
            <Button onClick={listIndex}>List Lists</Button>
            <Button onClick={userControls.handleLogout}>Logout</Button>
        </div>
    );
};

export default Main;

import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Disconnected = ({ checkIn }) => {
    const handleRefresh = () => {
        checkIn();
    };

    return (
        <div>
            <Redirect to="/" />
            <h1>Get to the Shoppa</h1>
            <p>Connecting to the server.</p>
            <p>It may still be starting up.</p>
            <Button onClick={handleRefresh}>Retry Connection</Button>
        </div>
    );
};

export default Disconnected;

import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import UserContext from "../../context/user.context";
// import { fetchGetWithToken } from "../../api/api";
// import NewListCard from "./NewListCard";
// import ListCard from "./ListCard";
import ListView from "../listview/ListView";
import { Route } from "react-router-dom";
import AllLists from "./AllLists";

const Main = ({ match }) => {
    const { user, userControls } = useContext(UserContext);

    return (
        <div>
            <h1>{`Welcome, ${user}`}</h1>

            <Route exact path="/lists" render={() => <AllLists />} />

            <Route
                path={`/lists/:listIndex`}
                render={(routerProps) => <ListView {...routerProps} />}
            />
            <Button onClick={userControls.handleLogout}>Logout</Button>
        </div>
    );
};

export default Main;

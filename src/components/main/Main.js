import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import UserContext from "../../context/user.context";
import { fetchGetWithToken } from "../../api/api";
import NewListCard from "./NewListCard";
import ListCard from "./ListCard";
import ListView from "../listview/ListView";
import ListArea from "./ListArea";
import { Route, useParams } from "react-router-dom";
import AllLists from "./AllLists";

const Main = ({ match }) => {
    const { user, userControls } = useContext(UserContext);
    // const [lists, setLists] = useState([]);

    // // const { listIndex } = useParams();

    // const fetchLists = () => {
    //     fetchGetWithToken("lists")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (data.all_lists) {
    //                 setLists(data.all_lists);
    //             }
    //         });
    // };

    // // fetch the lists when we load
    // useEffect(fetchLists, []);

    // const renderLists = () => {
    //     return lists.map((list) => {
    //         return (
    //             <ListCard
    //                 listDetails={list}
    //                 key={list.id}
    //                 deleteList={deleteList}
    //             />
    //         );
    //     });
    // };

    // const addList = (newList) => {
    //     setLists([...lists, newList]);
    // };

    // const deleteList = (id) => {
    //     const newLists = lists.filter((list) => list.id != id);
    //     setLists(newLists);
    // };

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

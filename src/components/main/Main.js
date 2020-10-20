import React, { useContext, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import UserContext from "../../context/user.context";
import { fetchGetWithToken } from "../../api/api";
import NewListCard from "./NewListCard";

const Main = () => {
    const { user, userControls } = useContext(UserContext);
    const [lists, setLists] = useState([]);

    const fetchLists = () => {
        fetchGetWithToken("lists")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.all_lists) {
                    setLists(data.all_lists);
                }
            });
    };

    const renderLists = () => {
        const listLis = lists.map((list) => <li>{list.name}</li>);
        return lists.length > 0 ? <ul>{listLis}</ul> : null;
    };

    const addList = (newList) => {
        setLists([...lists, newList]);
    };

    return (
        <div>
            <h1>{`Welcome, ${user}`}</h1>
            {renderLists()}
            <NewListCard addList={addList} />
            <Button onClick={fetchLists}>List Lists</Button>
            <Button onClick={userControls.handleLogout}>Logout</Button>
        </div>
    );
};

export default Main;

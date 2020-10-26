import React, { useContext, useState } from "react";
import { Button, Card, Icon, Hea } from "semantic-ui-react";
import UserContext from "../../context/user.context";
import { fetchGetWithToken } from "../../api/api";
import NewListCard from "./NewListCard";
import ListCard from "./ListCard";

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
        return lists.map((list) => {
            return <ListCard listDetails={list} />;
        });
    };

    const addList = (newList) => {
        setLists([...lists, newList]);
    };

    return (
        <div>
            <h1>{`Welcome, ${user}`}</h1>
            <Card.Group>
                {renderLists()}
                <NewListCard addList={addList} />
            </Card.Group>
            <Button onClick={fetchLists}>List Lists</Button>
            <Button onClick={userControls.handleLogout}>Logout</Button>
        </div>
    );
};

export default Main;

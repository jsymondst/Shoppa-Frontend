import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import UserContext from "../../context/user.context";
import { fetchGetWithToken } from "../../api/api";
import NewListCard from "./NewListCard";
import ListCard from "./ListCard";
import ListView from "../listview/ListView";
import ListArea from "./ListArea";
import { Route, useParams } from "react-router-dom";

const AllLists = ({ match }) => {
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

    useEffect(fetchLists, []);

    const renderLists = () => {
        return lists.map((list) => {
            return (
                <ListCard
                    listDetails={list}
                    key={list.id}
                    deleteList={deleteList}
                />
            );
        });
    };

    const addList = (newList) => {
        setLists([...lists, newList]);
    };

    const deleteList = (id) => {
        const newLists = lists.filter((list) => list.id != id);
        setLists(newLists);
    };

    return (
        <Card.Group>
            {renderLists()}
            <NewListCard addList={addList} />
        </Card.Group>
    );
};

export default AllLists;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, IconGroup, Header } from "semantic-ui-react";
import { fetchDeleteWithToken } from "../../api/api";
import { cardStyle } from "./styles";

export const ListCard = ({ listDetails, deleteList }) => {
    const [active, setActive] = useState(false);
    const [name, setName] = useState();
    const [icon, setIcon] = useState();

    const renderItems = () => {
        const listLis = listDetails.items.map((item) => (
            <li key={item.id}>{item.name}</li>
        ));
        return listDetails.items.length > 0 ? <ul>{listLis}</ul> : null;
    };

    const handleDelete = () => {
        fetchDeleteWithToken(`lists/${listDetails.id}`).then((res) => {
            if (res.ok) {
                deleteList(listDetails.id);
            } else {
                alert(`Unable to delete list. reason: ${res.statusText}`);
            }
        });
    };

    return (
        <Card style={cardStyle}>
            <Header>
                <Icon name={listDetails.icon} />
                {listDetails.name}
                <p>
                    <Link to={`/lists/${listDetails.urlindex}`}>
                        {listDetails.urlindex}
                    </Link>
                </p>
            </Header>
            <Card.Content>{renderItems()}</Card.Content>
            <button onClick={handleDelete}>DeleteList</button>
        </Card>
    );
};

export default ListCard;

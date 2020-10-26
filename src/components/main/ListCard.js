import React, { useState } from "react";
import { Card, Icon, IconGroup, Header } from "semantic-ui-react";

export const ListCard = ({ listDetails }) => {
    const [active, setActive] = useState(false);
    const [name, setName] = useState();
    const [icon, setIcon] = useState();

    const renderItems = () => {
        const listLis = listDetails.items.map((item) => <li>{item.name}</li>);
        return listDetails.items.length > 0 ? <ul>{listLis}</ul> : null;
    };

    return (
        <Card style={{ height: 300 }}>
            <Header>
                <Icon name={listDetails.icon} />
                {listDetails.name}
            </Header>
            <Card.Content>{renderItems()}</Card.Content>
        </Card>
    );
};

export default ListCard;

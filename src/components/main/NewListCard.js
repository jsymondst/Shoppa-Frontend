import React, { useState } from "react";
import { Card, Icon, IconGroup } from "semantic-ui-react";
import { cardStyle } from "./styles";

export const NewListCard = () => {
    const [active, setActive] = useState(false);
    const [name, setName] = useState();
    const [icon, setIcon] = useState();

    return (
        <Card style={cardStyle}>
            <Card.Content textAlign={"center"}>
                <Icon.Group size="massive" onClick={() => setActive(!active)}>
                    <Icon name={"circle outline"} color={"grey"} />
                    <Icon name={"plus"} size={"small"} color={"grey"} />
                </Icon.Group>
            </Card.Content>
            <Card.Content>
                {`card is ${active ? "active" : "not active"}`}
            </Card.Content>
        </Card>
    );
};

export default NewListCard;

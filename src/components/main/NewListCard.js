import React, { useState } from "react";
import { Card, Icon, IconGroup } from "semantic-ui-react";

export const NewListCard = () => {
    const [active, setActive] = useState();
    const [name, setName] = useState();
    const [icon, setIcon] = useState();

    return (
        <Card style={{ height: 300 }}>
            <Card.Content textAlign={"center"}>
                <Icon.Group size="massive">
                    <Icon name={"circle outline"} color={"grey"} />
                    <Icon name={"plus"} size={"small"} color={"grey"} />
                </Icon.Group>
            </Card.Content>
        </Card>
    );
};

export default NewListCard;

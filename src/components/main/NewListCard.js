import React, { useState } from "react";
import { Card, Icon, IconGroup } from "semantic-ui-react";
import { cardStyle } from "./styles";
import { fetchPostWithToken } from "../../api/api";

export const NewListCard = ({ addList }) => {
    const [active, setActive] = useState(false);
    const [name, setName] = useState();
    const [icon, setIcon] = useState("cart");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPostWithToken("lists", { name, icon })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.name) {
                    addList(data);
                }
            });
    };

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
                <form onSubmit={handleSubmit}>
                    <input
                        default="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Create list</button>
                </form>
            </Card.Content>
        </Card>
    );
};

export default NewListCard;

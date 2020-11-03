import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchGetWithToken } from "../../api/api";
import { Button } from "semantic-ui-react";
import { templateList } from "./templateList";

const ListView = ({ match }) => {
    const [currentList, setCurrentList] = useState(templateList);
    const [listError, setListError] = useState(null);
    const listIndex = match.params.listIndex;

    const fetchList = () => {
        fetchGetWithToken(`lists/${listIndex}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    setListError(data.error);
                } else if (data.list) {
                    setCurrentList(data.list);
                }
            });
    };

    const renderItems = () => {
        return (
            <ul>
                {currentList.items.map((item, index) => (
                    <li
                        key={item.id ? `id${item.id}` : `index${index}`}
                    >{`${item.category}: ${item.name}`}</li>
                ))}
            </ul>
        );
    };

    const addItem = (name, category) => {
        // let newList = { ...currentList };
        let items = currentList.items;
        items.push({ name, category });

        setCurrentList({ ...currentList, items });
    };

    const handleAddCheddar = () => {
        addItem("cheddar", "Cheese");
    };

    return (
        <div>
            <Link to={"/lists"}>Home</Link>
            <p>{match.params.listIndex}</p>
            {listError ? <h1>{listError}</h1> : null}
            <h1>{currentList.name}</h1>
            <Button onClick={handleAddCheddar}>Add Cheddar</Button>
            {renderItems()}
            <Button onClick={fetchList}>fetch list.</Button>
        </div>
    );
};

export default ListView;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGetWithToken } from "../../api/api";
import { Button } from "semantic-ui-react";
import { templateList } from "./templateList";
import ItemsContext from "../../context/items.context";
import NewItemForm from "./NewItemForm";
import ItemArea from "./ItemArea";

const ListView = ({ match }) => {
    const [currentList, setCurrentList] = useState(templateList);
    const [listError, setListError] = useState(null);
    const listIndex = match.params.listIndex;
    const [items, setItems] = useState([]);

    const fetchList = () => {
        fetchGetWithToken(`lists/${listIndex}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    setListError(data.error);
                } else if (data.list) {
                    setCurrentList(data.list);
                    setItems(data.list.items);
                }
            });
    };

    useEffect(fetchList, []);

    const renderItems = () => {
        return (
            <ul>
                {items.map((item, index) => (
                    <li
                        key={item.id ? `id${item.id}` : `index${index}`}
                    >{`${item.category}: ${item.name}`}</li>
                ))}
            </ul>
        );
    };

    const addItem = (name, category) => {
        const tempId = `temp${items.length + 1}`;

        setItems([...items, { name, category, id: tempId, temp: true }]);
    };

    const removeItem = (id, callback) => {
        let newItems = items.filter((item) => item.id !== id);
        setItems(newItems, callback);
    };

    const updateItem = (id, name, category) => {
        const oldItem = items.find((item) => item.id === id);
        const newItems = items.filter((item) => item.id !== id);
        const updatedItem = { ...oldItem, name, category };
        setItems([...newItems, updatedItem]);
    };

    const checkItem = (id) => {
        const oldItem = items.find((item) => item.id === id);
        const newItems = items.filter((item) => item.id !== id);
        const updatedItem = { ...oldItem, checked: !oldItem.checked };
        setItems([...newItems, updatedItem]);
    };

    const handleAddCheddar = () => {
        addItem("cheddar", "Cheese");
    };

    const itemsContextValue = {
        items,
        itemsControls: {
            addItem,
            removeItem,
            updateItem,
            checkItem,
        },
    };

    return (
        <div>
            <Link to={"/lists"}>Home</Link>
            <p>{match.params.listIndex}</p>
            {listError ? <h1>{listError}</h1> : null}
            <h1>{currentList.name}</h1>
            <ItemsContext.Provider value={itemsContextValue}>
                <NewItemForm />
                <ItemArea />
            </ItemsContext.Provider>
            <Button onClick={fetchList}>fetch list.</Button>
        </div>
    );
};

export default ListView;

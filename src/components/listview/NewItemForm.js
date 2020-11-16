import React, { createRef, useContext, useEffect, useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { API_URL } from "../../api/api";
import ItemsContext from "../../context/items.context";

const NewItemForm = () => {
    const { itemsControls } = useContext(ItemsContext);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const nameInput = createRef();

    const [exampleItems, setExampleItems] = useState([]);
    const [exampleCategories, setExampleCategories] = useState([]);

    const defaultExampleItems = [
        {
            name: "bananas",
            category: "Produce",
        },
        {
            name: "apples",
            category: "Produce",
        },
        {
            name: "cheddar",
            category: "Cheese",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        itemsControls.addItem(name, category === "" ? "Unsorted" : category);
        setName("");
        setCategory("");
        nameInput.current.focus();
    };

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(e.target.value);
        const match = exampleItems.find((item) => item.name === newName);
        if (match) {
            setCategory(match.category);
        }
    };

    const fetchExampleItems = () => {
        fetch(`${API_URL}/exampleitems`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.exampleitems) {
                    setExampleItems(data.exampleitems);
                    setExampleCategories(data.categories);
                }
            });
    };

    useEffect(fetchExampleItems, []);

    const namesDataList = () => {
        return (
            <datalist id="names">
                {exampleItems.map((item) => (
                    <option value={item.name}>{item.name}</option>
                ))}
            </datalist>
        );
    };

    const categoriesDataList = () => {
        // let categories = [];
        // exampleItems.forEach((item) => {
        //     if (!categories.some((cat) => cat === item.category)) {
        //         categories.push(item.category);
        //     }
        // });
        return (
            <datalist id="categories">
                {exampleCategories.map((category) => (
                    <option value={category}>{category}</option>
                ))}
            </datalist>
        );
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                ref={nameInput}
                id="item-name-box"
                list="names"
                autoFocus
                placeholder="name"
                value={name}
                onChange={handleNameChange}
            />
            {namesDataList()}
            <Input
                placeholder="category"
                list="categories"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            {categoriesDataList()}

            <Button type="submit">Add Item</Button>
        </Form>
    );
};

export default NewItemForm;

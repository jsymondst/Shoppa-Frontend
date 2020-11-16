import React, { useContext, createRef, useState } from "react";
import ItemsContext from "../../context/items.context";

const Item = ({ item }) => {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(item.name);
    const [category, setCategory] = useState(item.category);
    const { itemsControls } = useContext(ItemsContext);
    const thisItem = createRef();
    const nameInput = createRef();

    const toggleEditable = () => {
        if (!editable) {
            thisItem.current.addEventListener("keydown", handleEscapeCancel);
        }
        setEditable(!editable);
    };

    const handleEscapeCancel = (e) => {
        console.log(e.code);
        if (e.code === "Escape") {
            setEditable(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        itemsControls.updateItem(item.id, name, category);
        toggleEditable();
    };

    const handleDelete = () => {
        itemsControls.removeItem(item.id);
    };

    const handleCheck = () => {
        itemsControls.checkItem(item.id);
    };

    return (
        <div ref={thisItem} style={{ display: "flex" }} key={item.id}>
            {editable ? (
                <form onSubmit={handleSubmit}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                    />
                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <button type={"submit"}>Done</button>
                    <button onClick={toggleEditable}>Cancel</button>
                </form>
            ) : (
                <p>
                    {item.name}
                    {item.checked ? "✓" : null}
                    <button style={null} onClick={toggleEditable}>
                        edit
                    </button>
                </p>
            )}

            <button onClick={handleDelete}>delete</button>
            <button onClick={handleCheck}>check</button>
        </div>
    );
};

export default Item;

// ✓

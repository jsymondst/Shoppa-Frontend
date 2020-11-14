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
        } else {
            // thisItem.current.removeEventListener("keydown", handleEscapeCancel);
        }
        setEditable(!editable);
        // nameInput.current.setFocus();
        // thisItem.current.setAttribute("style", "background:red");
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
        // e.target.addEventListener()
    };

    const handleDelete = () => {
        itemsControls.removeItem(item.id);
    };

    return (
        <div ref={thisItem} style={{ display: "flex" }} key={item.id}>
            {editable ? (
                <form onSubmit={handleSubmit}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        // ref={nameInput}
                        autoFocus
                    />
                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <button
                        type={"submit"}
                        // style={{ display: "none" }}
                    >
                        Done
                    </button>
                    <button onClick={toggleEditable}>Cancel</button>
                </form>
            ) : (
                <p>
                    {item.name}
                    <button style={null} onClick={toggleEditable}>
                        edit
                    </button>
                </p>
            )}

            <button onClick={handleDelete}>delete</button>
        </div>
    );
};

export default Item;

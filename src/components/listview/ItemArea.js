import React, { useContext } from "react";
import ItemsContext from "../../context/items.context";

const ItemArea = () => {
    const { items } = useContext(ItemsContext);

    const renderCategories = () => {
        const categoriesObject = {};
        items.forEach((item) => {
            if (categoriesObject[item.category]) {
                categoriesObject[item.category].push(item);
            } else {
                categoriesObject[item.category] = [item];
            }
        });

        return Object.keys(categoriesObject).map((category) => {
            return (
                <div>
                    <h1>{category}</h1>
                    <ul>
                        {categoriesObject[category].map((item) => (
                            <li>{item.name}</li>
                        ))}
                    </ul>
                </div>
            );
        });
    };

    return renderCategories();
};

export default ItemArea;

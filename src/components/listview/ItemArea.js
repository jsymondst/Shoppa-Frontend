import React, { useContext } from "react";
import ItemsContext from "../../context/items.context";
import CategoryBox from "./Category";
import Item from "./Item";

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
                <CategoryBox category={category} props key={category}>
                    {categoriesObject[category].map((item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </CategoryBox>
            );
        });
    };

    return renderCategories();
};

export default ItemArea;

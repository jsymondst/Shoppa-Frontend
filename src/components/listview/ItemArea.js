import React, { useContext } from "react";
import ItemsContext from "../../context/items.context";
import CategoryBox from "./CategoryBox";
import Item from "./Item";

const ItemArea = () => {
    const { items } = useContext(ItemsContext);

    const renderCategories = () => {
        const categoriesObject = {};
        items.forEach((item) => {
            if (!item.checked) {
                if (categoriesObject[item.category]) {
                    categoriesObject[item.category].push(item);
                } else {
                    categoriesObject[item.category] = [item];
                }
            }
        });

        return Object.keys(categoriesObject).map((category) => {
            return (
                <CategoryBox category={category} props key={category}>
                    {categoriesObject[category].map((item) =>
                        item.checked ? null : <Item item={item} key={item.id} />
                    )}
                </CategoryBox>
            );
        });
    };

    const renderCheckedItems = () => {
        const checkedItems = items.filter((item) => item.checked);

        if (checkedItems.length > 0) {
            return (
                <div>
                    <h1>Checked Items</h1>
                    {checkedItems.map((item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div>
            <div style={categoryContainerStyle}>{renderCategories()}</div>
            {renderCheckedItems()}
        </div>
    );
};

export default ItemArea;

const categoryContainerStyle = {
    display: "flex",
    justifyContent: "center",
};

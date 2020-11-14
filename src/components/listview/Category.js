import React from "react";

const CategoryBox = ({ children, category }) => {
    return (
        <div key={category}>
            <h1>{category}</h1>
            {children}
        </div>
    );
};

export default CategoryBox;

import React from "react";

const CategoryBox = ({ children, category }) => {
    return (
        <div key={category} style={categoryBoxStyle}>
            <h1>{category}</h1>
            {children}
        </div>
    );
};

export default CategoryBox;

const categoryBoxStyle = {
    width: "300px",
    border: "1px solid",
    borderRadius: "5px",
    margin: "3px",
};

import React from "react";
import { Link } from "react-router-dom";
import ListView from "./ListView";

const ListArea = ({ match }) => {
    console.log("LA Rendered");
    return match.params.listIndex ? (
        <ListView listIndex={match.params.listIndex} />
    ) : (
        <Link to={"/lists/oFRMc1y6"}>oFRMc1y6</Link>
    );
};

export default ListArea;

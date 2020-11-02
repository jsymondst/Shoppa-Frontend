import React from "react";
import { Link } from "react-router-dom";

const ListView = ({ match, listIndex }) => {
    return (
        <p>
            {match.params.listIndex}
            <Link to={"/lists"}>Home</Link>
        </p>
    );
};

export default ListView;

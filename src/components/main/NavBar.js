import React, { useContext } from "react";
import UserContext from "../../context/user.context";
import "./NavBar.css";

const NavBar = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="navbar">
            <h1>{`Welcome, ${user}`}</h1>
            <ul>
                <NavButton caption={"Home"} destination={"/lists"} />
                <NavButton caption={"Logout"} />
            </ul>
        </div>
    );
};

const NavButton = ({ caption, destination, clickHandler }) => {
    return (
        <li>
            <a
                className="navbutton"
                href={destination ? destination : null}
                onClick={clickHandler ? clickHandler : null}
            >
                <p>{caption}</p>
            </a>
        </li>
    );
};

export default NavBar;

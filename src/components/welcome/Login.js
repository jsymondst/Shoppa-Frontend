import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user.context";
import { API_URL, login } from "../../api/api";
import { Form, Input, Button } from "semantic-ui-react";

export const Login = () => {
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const { user, userControls } = useContext(UserContext);
    // const getUsernameFromToken = () => {
    //     let token = localStorage.getItem("userToken");
    //     return token ? JSON.parse(atob(token.split(".")[1])).username : null;
    // };
    // useEffect(() => updateUser(getUsernameFromToken), []);

    const handleLogin = (e) => {
        e.preventDefault();
        // alert(`username: ${username}, password: ${password}`);
        login(username, password).then((data) => {
            if (data.user) {
                userControls.updateUser(data.user.username);
                localStorage.setItem("userToken", data.jwt);
            }
        });
        // updateUser(username);
    };
    return (
        <Form onSubmit={handleLogin}>
            <Input
                default="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                default="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
        </Form>
    );
};

export default Login;

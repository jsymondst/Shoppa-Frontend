import React, { useContext, useState } from "react";
import UserContext from "../../context/user.context";
import { login } from "../../api/api";
import { Form, Input, Button } from "semantic-ui-react";

export const Login = () => {
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const { userControls } = useContext(UserContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password).then((data) => {
            if (data.user) {
                userControls.updateUser(data.user.username);
                localStorage.setItem("userToken", data.jwt);
            }
        });
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

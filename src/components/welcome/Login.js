import React, { useContext, useState } from "react";
import UserContext from "../../context/user.context";
import { login } from "../../api/api";
import { Form, Input, Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

export const Login = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loginError, setLoginError] = useState();
    const { userControls, user } = useContext(UserContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password).then((data) => {
            console.log(data);
            if (data.user) {
                userControls.updateUser(data.user.username);
                localStorage.setItem("userToken", data.jwt);
            } else if (data.error) {
                setLoginError(data.error);
                setPassword("");
                setUsername("");
            }
        });
    };

    return (
        <Form onSubmit={handleLogin}>
            <Input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {loginError ? <p>{loginError}</p> : null}

            <Button type="submit">Login</Button>
            {user ? <Redirect to="/lists" /> : null}
        </Form>
    );
};

export default Login;

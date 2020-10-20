export const API_URL = "http://localhost:3001/";

const getToken = () => {
    return localStorage.getItem("userToken");
};

export const fetchGetWithToken = (path) => {
    return fetch(`${API_URL}${path}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
};

export const fetchPostWithToken = (path, payload) => {
    const configObj = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${this.getToken()}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(payload),
    };
    return fetch(`${API_URL}${path}`, configObj);
};

export const fetchDeleteWithToken = (path) => {
    const configObj = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${this.getToken()}`,
        },
    };
    return fetch(`${API_URL}${path}`, configObj);
};

// export const checkIn = () => {
//   fetchGetWithToken("checkin")
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.user) {
//       }
//     });
// };

export const login = (username, password) => {
    const userData = { username, password };
    return fetch(`${API_URL}login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ user: userData }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
const amount = 312;

ReactDOM.render(
    <App amount={amount}/>,
    document.getElementById(`root`)
);

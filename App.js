import React from "react";
import ReactDOM  from "react-dom/client";
// const heading = React.createElement("h1",{id:"heading"},"Hello from react")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading1"},"Children"),React.createElement("h2",{id:"heading2"},"Hello from react")]))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
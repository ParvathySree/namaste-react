import React from "react";
import ReactDOM  from "react-dom/client";

const Heading = () => {
    return <h1>Hello World</h1>
};

const Container = () =>{
    return <div><h2>Hi</h2><Heading/>{Heading()}</div>
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Container/>)
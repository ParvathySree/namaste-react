import { useState } from "react";

const User = (props) => {
    const {name,role} = props;
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(1);
    return(
        <div className="user-card">
            <h2>{name}</h2>
            <h3>{role}</h3>
            {/* <p>fCount : {count}</p>
            <p>fCount1 : {count1}</p>
            <button onClick = {() => setCount(count+1)}>Click me</button> */}
        </div>
    )
}

export default User;
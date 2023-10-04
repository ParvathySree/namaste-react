import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0,
            count1: 1
        }
    }

    render(){
    const {name,role} = this.props;
    const {count,count1} = this.state;

        return(
            <div className="user-card">
            <h2>{name}</h2>
            <h3>{role}</h3>
            <p>cCount : {count}</p>
            <p>cCount1 : {count1}</p>
            <button onClick = {() => this.setState({count:this.state.count+1})}>Click me</button>
        </div>
        )
    }
}

export default UserClass;
import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            // count : 0,
            // count1: 1
            userInfo : {
                name : "dummy",
                login : "dummy"
            }
        }
    }

    async componentDidMount(){
         const data = await fetch("https://api.github.com/users/ParvathySree")
         const json = await data.json();
         this.setState({userInfo : json})
         console.log("mounted")
    }

    componentDidUpdate(){
        console.log("updated")
    }

    componentWillUnmount(){
        console.log("unMounted")
    }
    render(){
    // const {name,role} = this.props;
    // const {count,count1} = this.state;
        const {name,login} = this.state.userInfo
        return(
            <div className="user-card">
            <h2>{name}</h2>
            <h3>{login}</h3>
            {/* <p>cCount : {count}</p>
            <p>cCount1 : {count1}</p>
            <button onClick = {() => this.setState({count:this.state.count+1})}>Click me</button> */}
        </div>
        )
    }
}

export default UserClass;
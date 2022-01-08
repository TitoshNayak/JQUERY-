


import React from "react";

class Test extends React.Component{

    state={
        message:"Good Morning"
    };

    changeMessage(){
        this.setState({message:"Good Evening to the world"})
    }

    secondMessage(){
        this.setState({message:"Good Afternoo to the second message"})
    }
    render(){
        return<>
        <h1>welcome here</h1>
        <h1>{this.state.message}</h1>
    <button onClick={()=>{
        this.changeMessage();
    }}>
        change message now
    </button> 
<br /><br /><br />
    <button onClick={()=>{
        this.secondMessage();
    }}>
        second button now</button>
        </>
    }
}

export default Test;
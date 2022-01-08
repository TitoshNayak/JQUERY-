import React from 'react';

class MessageUpdate extends React.Component{
state ={
    message:"Hello,Good Morning"
};


Update=()=>{
    this.setState({message:"Hello, Good Afternoon"});
}
    render(){
        return <>
           <h1>{this.state.message}</h1>
           <button className="btn btn-primary" onClick={this.Update}>Submit</button>
        
        </>
    }
}

export default MessageUpdate;
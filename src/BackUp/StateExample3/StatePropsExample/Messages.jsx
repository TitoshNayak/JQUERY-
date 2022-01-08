 
 import React from 'react';

 class Messages extends React.Component{

    state={
        wish:"Good morning Titosh"
    };

    ChangeMessage(){
        this.setState({wish:"Good Evening Nayak"})
    }
     render(){
         return <>
           <h1>Messages data here</h1>
           <h2>{this.state.wish}</h2>

           <button className="btn btn-success" onClick={()=>{
               this.ChangeMessage();
           }} > Submit </button>
         </>
     }
 }

 export default Messages;
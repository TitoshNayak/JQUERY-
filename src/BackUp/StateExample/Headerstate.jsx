
import React from 'react';

 class Headerstate extends React.Component{

  state={
      message:"Good morning"
  };

  changeMessage(){
      
           this.setState({message:"good afternoon"})
  }

     render(){
         return<>
         <h1>welcome</h1>
         <h2>{this.state.message}</h2>

         <button onClick={()=>{
              this.changeMessage();
         }}
         >Change message</button>
         </>
     }
     
 }

 export default Headerstate;
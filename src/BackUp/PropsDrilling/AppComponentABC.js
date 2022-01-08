import React from 'react';
 import ComponentA from './BackUp/PropsDrilling/ComponentA';

class App extends React.Component{
    state={
      userInfo:{
          name:"Titosh",
          age:33
      }
    };
    render(){
        return <>
        <pre>Myname :{JSON.stringify(this.state.userInfo.name)}</pre>
        <pre>Myage :{JSON.stringify(this.state.userInfo.age)}</pre>
         <h1>App Props Drilling</h1>
    
         <h2>My Name is:{this.state.userInfo.name}</h2>
         <hr />
         <ComponentA employee={this.state.userInfo} /> 
        </>
    }
}

export default App;
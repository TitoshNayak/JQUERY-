import React from "react";
import PartA from './BackUp/DrillingProps/PartA';

class App extends React.Component{

    state={
        userdetails:{
            name:"Mohan",
            age:44
        }
    };

    render(){
        return<>
        
        <h1>App Component</h1>
        <hr />
        <PartA  emp={this.state.userdetails}/>
        </>
    }
}

export default App;
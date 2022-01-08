import React from 'react';
import CompA from './BackUp/PropsDrillling/CompA';

class App extends React.Component{

   state={
      userInfo:{
          name:"Titosh",
       age:22} 
   };

    render(){
        return <>
                <h1>App page:</h1>
                <pre>name:{JSON.stringify(this.state.userInfo.name)}</pre>
                <pre>age:{JSON.stringify(this.state.userInfo.age)}</pre>

                {/* <pre>name:{JSON.stringify(this.props)}</pre> */}
                <CompA  emp={this.state.userInfo}/>
        </>
    }
}
export default App;
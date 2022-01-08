import React from 'react';
//import Employee from './BackUp/EmployeeData/Employee';
import Productitem from './BackUp/EmployeeData/Productitem';
import WatchTime from "./BackUp/ReactLifeCycleMethod/WatchTime";
import Time from "./BackUp/ReactLifeCycleMethod/Time";
class App extends React.Component{
    render(){
        return <>
     
        <nav className="navbar navbar-dark bg-dark">
      < a className ="navbar-brand" href="/">
      <h1>React- Employee data and Update</h1>
      </a>
      
        </nav>
        {/* <Employee /> */}
           <Productitem />
           <WatchTime />
           <Time />
        </>
    }
}

export default App;
import React from 'react';
 //import Loginform from './BackUp/EventHandler/Loginform';
// import SMSApp  from './BackUp/EventHandler/SMSApp';
// import ShowPassword from './BackUp/EventHandler/showPassword';
import Register from './BackUp/EventHandler/Register';
class App extends React.Component{
    render(){
        return <>
            <nav className="navbar-dark bg-primary">
                <a className="navbar navbar-brand" href="/">React Form /Register/ShowPassword</a>
                </nav>
                {/* <Loginform /> */}
                <Register />
                {/* <SMSApp /> */}
                 {/* <ShowPassword />  */}
        </>
           
      
        
    }
}

export default App;
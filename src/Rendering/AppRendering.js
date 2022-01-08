import React from 'react';

import UserLogin from './Rendering/UserLogin';
import SingleButton from './Rendering/SingleButton';

class App extends React.Component{
    render(){
        return<>

        <nav className="navbar navbar-dark bg-primary">
         < a className="navbar-brand" href="/" ><h1>Conditional rendering</h1></a>
        
           
        </nav>
        <UserLogin />
        <SingleButton />
        </>
    }
}

export default App;

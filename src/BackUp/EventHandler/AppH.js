
import React from 'react';
import Design from './Bootstrap/Design';
import Navbar from './Bootstrap/Navbar';

class App extends React.Component {
    render() {
        return <>
           <Navbar />
           <Design />
        </>
    }
}

export default App;
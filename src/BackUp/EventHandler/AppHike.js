import React from 'react';
import MessageUpdate from './BackUp/EventHandler/MessageUpdate';
import Hike from './BackUp/EventHandler//Hike';
class App extends React.Component{
    render(){
        return<>
         <h1>App component</h1>
         <hr />
         <MessageUpdate />
         <hr />
         <Hike />
        </>
    }
}
export default App;
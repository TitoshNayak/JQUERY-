
import React from 'react';
import CounterValue from './StatePropsExample/CounterValue';
import Update from './StatePropsExample/Update';
import Messagaes from './StatePropsExample/Messages';
import CounterCount from './StatePropsExample/CounterCount';

class App extends React.Component {
    render() {
        return <>
            <h1>App Component</h1>
            <Update />
            <hr />

            <CounterValue />

            <hr />

            <Messagaes />

            <CounterCount />
        </>
    }
}

export default App;
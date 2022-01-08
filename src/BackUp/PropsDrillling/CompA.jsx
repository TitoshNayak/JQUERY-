import React from 'react';
 import CompB from './CompB';

class CompA extends React.Component{
    render(){
        return <>
     
     <h2>CompA page</h2>
     <pre>{JSON.stringify(this.props)}</pre>
     {/* <h1>name is:{this.props.emp}</h1> } */}
     <hr />
     <CompB  emp1={this.props}/>
        </>
    }
}

export default CompA;
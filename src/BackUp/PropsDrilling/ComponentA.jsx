import React from 'react';
import ComponentB from './ComponentB';

class ComponentA extends React.Component{
    render(){
        return <>
         {/* <pre>{JSON.stringify(this.props)}</pre> */}
          <h1>welcome to ComponentA page</h1>
          {/* <h3>My A is:{this.props.employee}</h3> */}
          <hr />
          <ComponentB  employee1={this.props.employee}/>
        </>
    }
}

export default ComponentA;
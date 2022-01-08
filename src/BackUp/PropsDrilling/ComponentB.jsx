import React from 'react';
import ComponentC from './ComponentC';



class ComponentB extends React.Component{
    render(){
        return <>
         {/* <pre>{JSON.stringify(this.props)}</pre> */}
          <h1>welcome to ComponentB page</h1>
          <hr />
          <ComponentC employee2={this.props.employee1}/>
        </>
    }
}

export default ComponentB;
import React from 'react';

class ComponentC extends React.Component{
    render(){
        return <>
         <pre>{JSON.stringify(this.props)}</pre>
          <h1>Employee Name:{this.props.employee2.name}</h1>
          <h1>Employee Age:{this.props.employee2.age}</h1>
        </>
    }
}

export default ComponentC;
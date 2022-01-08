import React from 'react';
 import CompC from './CompC';

class CompB extends React.Component{
    render(){
        return <>
     
     <h2>CompB page</h2>
     <pre>{JSON.stringify(this.props)}</pre>
    {/* <h1>name is:{this.props.emp2}</h1> */}
 <CompC  emp2={this.props.emp1}/>
         <hr />
     
        </> 
    }
}

export default CompB;
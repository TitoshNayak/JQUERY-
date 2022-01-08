import React from "react";
import  PartC from "./PartC";

class PartB extends React.Component{
    render(){
        return<>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
        <h1>B Component</h1>
        <hr />
        <PartC  emp2={this.props.emp1}/>
        </>
    }
}

export default PartB;
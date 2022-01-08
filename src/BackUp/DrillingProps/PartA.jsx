import React from "react";
import PartB from "./PartB";

class PartA extends React.Component{
    render(){
        return<>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
        <h1>A Component</h1>
        <hr />
        <PartB emp1={this.props.emp} />
        </>
    }
}

export default PartA;
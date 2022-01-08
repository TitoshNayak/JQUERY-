import React from "react";


class PartC extends React.Component{
    render(){
        return<>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
        <h1>C Component</h1>
        <h2>My name is:{this.props.emp2.name}</h2>
        <h2>My Age is:{this.props.emp2.age}</h2>
        <hr />
        </>
    }
}

export default PartC;
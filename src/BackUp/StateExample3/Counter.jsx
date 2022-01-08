import React from 'react';
class Counter extends React.Component{

    state={
        qty:1
    };

    incrHandeler=()=>{
        this.setState({qty:this.state.qty+1});
    }

    decrHandeler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    render(){
        return<>
        <h1>Counter value:{this.state.qty}</h1>
        <button onClick={this.incrHandeler}>+</button>     <button onClick={this.decrHandeler}>-</button> 
        </>
    }
}

export default Counter;
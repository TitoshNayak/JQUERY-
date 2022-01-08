
import React from 'react';

class CounterCount extends React.Component{

    state={
        value:1
    };

    plusValue(){
        this.setState({value:this.state.value + 1})
    }

    minusValue(){
        this.setState({value:this.state.value - 1})
    }
    render(){
        return <>
    <h1>CounterCount data here</h1>
    <h2>{this.state.value}</h2>

    <button className="btn btn-success" onClick={()=>{
        this.plusValue();
    }}>+</button>

<button className="btn btn-warning" onClick={()=>{
        this.minusValue();
    }}>-</button>
        </>
    }
}

export default CounterCount;
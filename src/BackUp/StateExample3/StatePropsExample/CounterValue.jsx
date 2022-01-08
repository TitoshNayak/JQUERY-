import React from 'react';

class CounterValue extends React.Component {

    state = {
        qty: 1
    };

    ChangeMe() {
        this.setState({ qty: this.state.qty + 1 })

    }

    Decrement() {
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {
        return <>
            <h1 >Counter value</h1>
            <h2>{this.state.qty}</h2>

            <button  className="btn btn-success" onClick={() => {
                this.ChangeMe();
            }}>+</button>     &nbsp;      &nbsp;   &nbsp;
            <button className="btn btn-danger" onClick={() => {
                this.Decrement();
            }}>-</button>


        </>
    }
}

export default CounterValue;
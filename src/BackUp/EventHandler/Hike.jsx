import React from 'react';

class Hike extends React.Component {
     state={
         salary :100
     };

     Update5=()=>{
         this.setState({salary:this.state.salary});
     }
     Update3=()=>{
        this.setState({salary:"state.salary + 10%"});
    }
    Update2=()=>{
        this.setState({salary:"state.salary + 10%"});
    }
    render() {
        return <>
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="caerd-header bg-light">
                                <h1>Hike salary:{this.state.salary}</h1>
                            </div>
                            <div className="card-body">
                                <button className="btn btn-success mx-1" onClick={this.Update5}>50%</button>
                                <button className="btn btn-warning mx-3"  onClick={this.Update3}>30%</button>
                                <button className="btn btn-danger mx-1"  onClick={this.Update2}>20%</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </>
    }
}
export default Hike;
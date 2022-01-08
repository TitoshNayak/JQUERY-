
import React from 'react';

class ShowPassword extends React.Component {
    state={
        type:"password"
    };

    passwordShow=()=>{
       this.state.type ==="password"
       ? this.setState({type:"text"})
       : this.setState({type:"password"});
    }
    render() {
        return <>
            <h1>password components</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col md-6">
                        <div className="card">
                            <div className="card-header">Show password</div>
                            <div className="card-body">
                            <div className="input-group mx-4">
                                <div>
                                    <input type={this.state.type} className="form-control " />
                                    
                                </div> 
                                <div className="input-group-pretend">
                                        <div className="input-group-text">
                                            <input type="checkbox" onChange={this.passwordShow} />
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    }
}

export default ShowPassword;
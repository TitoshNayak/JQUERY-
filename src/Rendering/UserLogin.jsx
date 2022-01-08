import React from 'react';

  class UserLogin extends React.Component {
    state = {
        isLoggin: false,
        message: "",
    };

    updateLogin = () => {
        this.setState({
            isLoggin: true,
            message: " Login success",
        });
    }

    updateLogout = () => {
        this.setState({
            isLoggin: false,
            message: " Logout success",
        });
    }

    
    render() {
        return <>
            <div className="container mt-4">
                <div className="row ">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-light">
                                <h2>conditional rendering</h2>
                                <h4>{this.state.message}</h4>
                            </div>
                            <div className="card-body">
      {!this.state.isLoggin?
          (                              
            <button className="btn btn-success" onClick={this.updateLogin}>Login</button>
          )
        : (
            <button className="btn btn-warning"  onClick={this.updateLogout}>Logout</button>
        )                            
    }
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    }
}

export default UserLogin;

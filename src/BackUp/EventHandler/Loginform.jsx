import React from 'react';


class Loginform extends React.Component{

    state={
        email:"",
        password:"",
    };
    // emailHandler=(event)=>{
    //     //console.log(event.target.name)
    //      this.setState({email:event.target.value});
    // }
    // PasswordHandler = (event)=>{
    //     //console.log(event.target.name)
    //      this.setState({password:event.target.value});
    // }
UpdateValue=(event)=>{
    this.setState({[event.target.name]:event.target.value});
    event.preventDefault();
}
    render(){
        return<>
        <div className="container mt-4">
            <div className="row">
                <div className="col md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Login form</h3>
                            <pre>{JSON.stringify(this.state)}</pre>
                        </div>
                        <div className="card-body">
                            <form >
                                <div className="form-group">
                                    <input type= "text"  placeholder="email" className="form-control" name="email" onChange={this.UpdateValue}/>
                                </div>
                                <div className="form-group mt-4">
                                    <input type= "password"  placeholder="Password" className="form-control" name="password" onChange={this.UpdateValue} />
                                </div>
                                <div>
                                    <input type="submit" className="btn btn-success btn-sm mt-4" value="Login" />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}
export default Loginform;
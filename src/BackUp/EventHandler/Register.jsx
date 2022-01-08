import React from 'react';

class Register extends React.Component{
    state={
        username:"",
        email:"",
        password:""
    };

    formHandler =(event)=>
    {
this.setState({[event.target.name]: event.target.value, });
    }

 registrationHandler=(event)=>{
  console.log(this.state.username);
  console.log(this.state.email);
  console.log(this.state.password);
      event.preventDefault();
    }

    render(){
        return <div>
            <h1>welcome</h1>
            <div className="container mt-5">
               <div className="row">
                   <div className="col">
                       <div className="card">
                           <div className="card-header">
                               <h1>registration page</h1>
                   <pre>{JSON.stringify(this.state)}</pre>
                  
                           </div>
                           <div className="card-body">
                    <form onSubmit={this.registrationHandler}>
                        <div className="form-group mt-4">
                            <input type="text" name="username" 
                            placeholder="User Name" className="form-control mt-5" 
                             onChange={this.formHandler}/>
                        </div>

                        <div className="form-group">
                            <input type="text" name="email" 
                            placeholder="Email" className="form-control  mt-3"
                            onChange={this.formHandler}/>
                        </div>

                        <div className="form-group">
                            <input type="password" name="password" 
                            placeholder="Password" className="form-control mt-3"
                            onChange={this.formHandler}/>
                        </div>
                        <input type="submit" className="btn btn-success medium-ms mt-5"  
                           value="SignUp"/>
                    </form>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    }
}
export default Register;
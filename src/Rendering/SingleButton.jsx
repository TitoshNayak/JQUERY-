import React from 'react';

class SingleButton extends React.Component{
    state={
        isLogin:false,
        message:"",
    };

    updateLogin=()=>{
        this.setState({
            isLogin:true,
            message: "login successful"
        });
    }
    updateLogout=()=>{
        this.setState({
            isLogin:true,
            message: "logout successful"
        });
    }
    render(){
        return<>

        <h1>welocme:{this.state.message}</h1>
        {
            !this.state.isLogin ?
            (
            <button onClick={this.updateLogin}>Login</button> 
            ):(
                 <button onClick={this.updateLogout}>Logout</button>
            )
        }
   

        </>
    }
}

export default SingleButton;

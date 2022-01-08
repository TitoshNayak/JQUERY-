import React from 'react';
class Header extends React.Component{
    state={
        wish:"Very Good Morning"
    };

    state1={
        visit:"come home now"
    }

    changeMe(){
        this.setState({wish:"Morning is the Light to Change"});
        this.setState({visit:"sure i am coming now!"})
    }

    ulterMe(){
        this.setState({wish:"good evening and a night"})
    }

    render(){
        return<>

        <h1>{this.state.wish}</h1>
        <h1>{this.state1.visit}</h1>
        <button onClick={()=>{
            this.changeMe();
        }}>Click Here</button>
        <br></br> <br></br> <br></br>
        <button onClick={()=>{
            this.ulterMe();
        }}>Click Here</button>
        <hr />
        <hr />
        </>
    }
}

export default Header;
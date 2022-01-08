import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <>
            <h1>Enter the name:{this.props.employee.name}</h1>
            <h1>Enter the age:{this.props.employee.age}</h1>
            <h1>Enter the loc:{this.props.employee.loc}</h1>
             <h1>Enter the std:{this.props.employee.std}</h1>
            </>

        );
    }
}

export default Footer;
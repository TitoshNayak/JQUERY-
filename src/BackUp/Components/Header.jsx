import React from 'react';
import Footer from './Footer';

class Header extends React.Component{
    emp={
        name:'Nayak',
        age:12,
        loc:"Bangalore",
        std:"twelth"
    };

    render(){
        return(
       <>
       <h2>Header Components...</h2>
       <Footer  employee={this.emp}/>
       </>
        );
    }
}
 
export default Header;



import React from "react";
import Footerclass from './Footerclass';

class Headerclass extends React.Component{

   emp={
             name:"Balu",
             age:65,
             loc:"delhi"
           };

    render(){
        return(
            <>

             <h1>It is a Header data</h1>
             <Footerclass  data={this.emp}
                                
                          
                          />

            </>
        );
    }
}

export default Headerclass;
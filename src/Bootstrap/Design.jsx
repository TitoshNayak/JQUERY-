 
   import React from 'react';

   class Design extends React.Component {
       state ={
           message:"Very Good Morning"
       };

       ChangeMessage=()=>{
           this.setState({message:"Message changed successfully"})
       }
       goodNight=()=>{
        this.setState({message:"Good Night changed successfully"})
    }
       render() {
           return <>
               <div className="container mt-5">
                   <div className="row">
                       <div className="col-md-4 ">
                           <div className="card" >
                            <div className="card-header">
                                <h1>{this.state.message}</h1>
                            </div>
                            <div className="card-body">
                            <button onClick={()=>{
                                this.ChangeMessage();}} className="btn btn-success">Change message</button>
                          
                           <button onClick={this.goodNight}
                                className="btn btn-primary mx-5">Good Night</button>
                            </div>
                           </div>
                       </div>
                   </div>
               </div>


           </>
       }
   }
   
   export default Design;
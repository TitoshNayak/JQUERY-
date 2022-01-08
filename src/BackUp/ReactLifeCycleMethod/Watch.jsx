import React from "react";


class Watch extends React.Component{
 constructor(props){
     super(props);
     this.state={
        currentTime:new Date().toLocaleTimeString()
     };
 }

 componentDidMount(){
     setInterval(() => {
         this.setState({
            currentTime:new Date().toLocaleTimeString()
         })
     }, 1000);
 }

  
    render(){
        return <>
           <nav className="navbar navbar-dark bg-dark">
               <a className="navbar-brand" href="/">
                   Local time 
               </a>
           </nav>
           <div className="container mt-5">
               <div className="row">
                   <div className="col md-10">
                       <div className="card mt-2 ">
                      
                           <div className="card-header bg-warning">
                           <h1>Watch </h1>
                           </div>
                           <div className="card-body md-10">
                              <h1>Time:{this.state.currentTime}</h1>
                           </div>
                       </div>
                       
                   </div>
               </div>
           </div>
           
           </>
  
    }
}

export default Watch;
import React from "react";

class WatchTime extends React.Component{
constructor(props){
    super(props);
   this.state={
        currentTime:new Date().toLocaleTimeString()

    
    };
}
componentDidMount(){
      setInterval(()=>{
          this.setState({
              currentTime:new Date().toLocaleTimeString()
          })
      },1000)
}
    render(){
        return<>
        <nav className="navbar navbar-light bg-primary">
            <a  className="navbar-brand"  href="/">  Digital Watch</a>
        </nav>

        <div className="container mt-5">
            <div className="row">
               <div className="col">
                   <div className="card">
                       <div className="card-header bg-warning">
                  <h1>DigitalWatch</h1>
                  
                       </div>
                       <div className="card-body bg-danger">
                       time:{this.state.currentTime}
                       </div>
                   </div>
               </div>
            </div>
        </div>
        </>
    }
}

export default WatchTime;
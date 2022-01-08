import React from "react";

class Footerclass extends React.Component{
    render( ){
        return(
            <>
            <pre>{JSON.stringify(this.props)}</pre>

            <h1>The details are:{this.props.data.name}</h1>
            <h1>The details are:{this.props.data.age}</h1>
            <h1>The details are:{this.props.data.loc}</h1>
            </>
        );
    }
}

export default Footerclass;
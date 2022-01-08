import React from 'react';
import Two from './Two';

class One extends React.Component{
emp={
    name:"balu",
    age:60,
    Loc:"mohana"
};

    render(){
        return(
            <>
<h1>One page here</h1>

<Two  employee={this.emp} />

            </>
        );
    }
}

export default One;
import React from 'react';


class Update extends React.Component {

    state = { message: "Change the message now" };

    Changeme() {
        this.setState({ message: "Successfully changed the message now" });


    }
    render() {
        return <>
            <h1>Update Component</h1>
            <h2>{this.state.message}</h2>
            <button className="btn btn-success" onClick={() => {
                this.Changeme();
            }} >Click me now</button>

            

        </>
    }
}

export default Update;
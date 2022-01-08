import React from 'react';

class SMSApp extends React.Component {
    state = {
        limit:100,
        count:100,
    };
    updateCount=(event)=>{
        console.log(event.target.value.length)
    this.setState({count:this.state.limit-event.target.value.length});
    }
    render() {
        return <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>SMS Application</h3>
                                <pre>{JSON.stringify(this.state)}</pre>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea rows="4" cols="40" placeholder="Enter Message" maxLength={this.state.limit} className="form-control" onChange={this.updateCount}></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <p className="h4">Remaining character:<span>{this.state.count}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    }
}

export default SMSApp;
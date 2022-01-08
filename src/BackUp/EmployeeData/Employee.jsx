import React from 'react';
import {employeeData} from './Data';

export class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employee:employeeData,
        };

    }
///////////////////////////////
// constructor (props){
//    super(props);
//    this.state={};
// }

   
    render(){
        return<>
        <div className="container mt-4">
            <div className="row">
                <div className="col md-10 ">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                            </tr>
                        </thead>

                        <tbody>

                            {/* how to iterate the date  */}

                            {
                                this.state.employee.map((emp)=>{
                                    return  <tr>
                                   
                                     {/* <td>{emp.name.first} {emp.name.last}</td>
                                     <td>{emp.location.street}</td> */}

                                                  <td>{emp.id}</td>
                                                  <td>{emp.first_name}</td>
                                                  <td>{emp.last_name}</td>
                                                  <td>{emp.email}</td>
                                                  <td>{emp.gender}</td>
                                             </tr>

                                })
                            }
                            
                           
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
        </>
    }
}
export default Employee;
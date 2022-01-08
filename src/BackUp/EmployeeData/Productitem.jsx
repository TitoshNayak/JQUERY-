import React from "react";

class Productitem extends React.Component{
    state={
        product:{
            name:"Lenovo",
            image:"",
            qty:1,
            price:1000,
        }
    }
    render(){
        return<>
        <div className="container mt-4">
            <div className="row">
                <div className="col md-10 ">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{this.state.product.name}</td>
                                <td>
                                     <i className="fa fa-minus-circle" />
                                     {this.state.product.qty}
                                     <i className="fa fa-plus-circle" />
                                </td>
                                <td>{this.state.product.price}</td>
                                <td>{this.state.product.qty * this.state.product.price}</td>
                            </tr>

                          
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
        </>
    }

}

export default Productitem;
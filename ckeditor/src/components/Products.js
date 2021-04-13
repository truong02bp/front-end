import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
const products = [
    {
        id: 1,
        name: "iphone 6",
        price: 300000
    },
    {
        id: 2,

        name: "iphone 7",
        price: 400000
    },
    {
        id: 3,

        name: "iphone 8",
        price: 500000
    },
    {
        id: 4,
        name: "iphone X",
        price: 600000
    }
]

export default class Products extends Component {

    showProducts = (products) => {
        var { match } = this.props;
        console.log(match)
        products = products.map((product, index) => {
            return (
                <NavLink to="" key={index}>
                    <li className="list-group-item" >{product.name} : {product.price}</li>
                </NavLink>
            )
        });
        return products;
    }

    render() {
        return (
            <div className="container">
                <h1>Danh sách sản phẩm</h1>
                <ul className="list-group">
                    {this.showProducts(products)}
                </ul>
            </div>
        )
    }
}

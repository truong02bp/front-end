import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const menus = [
    {
        to: "/",
        activeClass: "active",
        className: "nav-link",
        exact: true,
        label: "Home"
    },
    {
        to: "/about",
        activeClass: "active",
        className: "nav-link",
        exact: false,
        label: "About"
    },
    {
        to: "/contact",
        activeClass: "active",
        className: "nav-link",
        exact: false,
        label: "Contact"
    },
    {
        to: "/products",
        activeClass: "active",
        className: "nav-link",
        exact: false,
        label: "Product"
    }
]

class Menu extends Component {

    showMenu = (menus) => {
        if (menus.length > 0) {
            menus = menus.map((menu, index) => {
                return (
                    <li className="nav-item" key={index}>
                        <NavLink
                            to={menu.to}
                            activeClassName={menu.activeClass}
                            exact={menu.exact}
                            className={menu.className}>
                            {menu.label}
                        </NavLink>
                    </li>
                )
            });
            return menus;
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {this.showMenu(menus)}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Menu;

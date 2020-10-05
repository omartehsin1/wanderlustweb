import Item from 'antd/lib/list/Item';
import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css'
import {Button} from '../Button';
import {Link} from 'react-router-dom'
class Navbar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Wanderlust<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url}>
                                <div className={item.cName}>
                                        {item.title}
                                    </div>
                                </Link>
                            </li>
                        );    
                    })}
                    
                </ul>
                <Link to="/login">
                    <Button>Sign Up/Log In</Button>
                </Link>
                
            </nav>
        );
    }
}

export default Navbar;
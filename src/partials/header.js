import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="kk-header-container">
            <Link className="kk-item" to="/">Home</Link>
            <Link className="kk-item" to="/productList">ProductList</Link>
        </div>

    );
}

export default Header;
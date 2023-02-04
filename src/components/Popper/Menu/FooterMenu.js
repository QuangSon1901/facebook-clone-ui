import React from 'react';
import { Link } from 'react-router-dom';

const FooterMenu = ({ to, text }) => {
    return (
        <div className="menu-wrapper__footer">
            <Link to={to}>{text}</Link>
        </div>
    );
};

export default FooterMenu;

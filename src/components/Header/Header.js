import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >

            <Link className="text-black m-2" to="/home">Home</Link>
            <Link className="text-black m-2" to="/about">About us</Link>
            <Link className="text-black m-2" to="/contact">Contact</Link>
        </div>
    );
};

export default Header;
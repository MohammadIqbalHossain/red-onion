import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo2.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-5 md:px-20">
            <div className="hidden md:block">
                <img className="h-10" src={Logo} alt="" />
            </div>
            <div className="flex gap-4 items-center">

                <Link className=" text-4xl" to="/banner">
                   <AiOutlineShoppingCart/>
                </Link>
                <Link to='/login '>Login</Link>

                <Link className="bg-red-600 py-2 text-white px-4 rounded-xl " to='/signup'>Sign Up</Link>
            </div>
           
        </div>
    );
};

export default Header;
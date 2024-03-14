import React from "react";
import {Link, useLocation} from 'react-router-dom'
import '../assets/css/Navbar.css'

export default function Navbar(){
    const currentPage = useLocation().pathname;

    const handleLinkClick = (event) => {
      document.querySelectorAll('nav').forEach(link => {
        link.className.remove('nav-active');
      });
      event.target.className.add('nav-active');
    };
    return(
        <div className="NavClass">
            <div>
                <Link
                to="/"
                className="navButton"
                >
                Local Talent
                </Link>
            </div>

            <div>
                <Link
                to="/Gallery"
                className="navButton"
                >
                Gallery
                </Link>
            </div>
            <button className="navCart navButton"><img className="navCartImg" src="src\assets\icons\cart-1-svgrepo-com.svg" alt="Cart" /></button>
        </div>
    );
};
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/Header.css'

export default function Header(){
    const currentPage = useLocation().pathname;

    const handleLinkClick = (event) => {
      document.querySelectorAll('nav').forEach(link => {
        link.className.remove('nav-active');
      });
      event.target.className.add('nav-active');
    };
    return(
        <div className="flex-container-column headerClass main-content-scaling">
        <Link
          to="/"
          className="flex-container-row title"
          onClick={handleLinkClick}
        >
                <h2 className="title pushDown">ArtHouse</h2>
                <h2 className="title2 red">SJ</h2>
        </Link>
            <p className="flavorText">Local Art for a local purpose</p>
        </div>
    );
};
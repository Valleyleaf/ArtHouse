import React from "react";
import '../assets/css/Navbar.css'


export default function Home(){
    return(
        <div className="NavClass">
            <p>Home</p>
            <p>Gallery</p>
            <button className="navCart navButton"><img className="navCartImg" src="src\assets\icons\cart-1-svgrepo-com.svg" alt="Cart" /></button>
        </div>
    );
};
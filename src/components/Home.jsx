import React from "react";
import Articles from '../components/Articles/ArticleContainer'
import '../assets/css/Home.css'


export default function Home(){
    return(
        <div className="homeClass">
            {Articles}
        </div>
    );
};
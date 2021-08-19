import React from "react";
import { Link } from "react-router-dom";


export default function Sidenav(){
    return(
        <nav className="sideNav">
            <ul>
                <Link className="li" to="/" >Home</Link>
                <Link className="li" to="/">Users</Link>
                <Link className="li" to="/">About</Link>
              
            </ul>
        </nav>
    );
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"

function Navbar(){
    let navigate=useNavigate();
    const [clicked, setClicked] =useState(false);
    const handleClick = ()=>{
        setClicked(!clicked);
    }
   
        return(
            <>
            <nav className= "NavbarItems">
                <h1 className="navbar-logo">Connect Window</h1>
                <div className="menu-icons" onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={clicked ? "nav-menu active": "nav-menu"}>
                {MenuItems.map((item,index) =>{
                    return(
                        <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>
                        {item.title}
                        </Link>
                    </li>
                    )
                })}  
                <button onClick={()=>{navigate('/FormComponent')}}>Sign Up</button> 
                </ul>
            </nav>
            </>
        );
    
}
export default Navbar;
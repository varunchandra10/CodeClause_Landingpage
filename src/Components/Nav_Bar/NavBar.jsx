import React, { useState } from 'react';
import { NavData } from './NavData';
import './NavBar.css'

const NavBar = () => {
    const [state = { clicked : false}, setState] = useState();
    const handleClick = () => {
        setState({ clicked: !state.clicked})
    }
  return (
    <nav>
        <nav className="NavbarItems">
                <h1 className="logo1">Lens Vally <br />
                </h1>
                <div className="menu-icons" onClick={handleClick}>
                    <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
                    {NavData.map((item, index) => {
                        return (
                                <li key={index}>
                                    <a href={item.url} className={item.cName}>
                                        {item.title}
                                    </a>
                                    <a href={item.url1} className='socialmedia'><i className={item.icon1}></i></a>
                                    
                                </li>
                                )})}
                
                </ul>
            </nav>
    </nav>
  )
}

export default NavBar
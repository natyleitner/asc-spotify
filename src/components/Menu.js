import React from 'react'
import '../App.css';
import menu from '../assets/menu.jpeg';

const Menu = () => {
    return (
        <aside>
        <img src={menu} alt="menu" className="menu-img"/>
      </aside>
    )
}

export default Menu;
import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return  <nav className={s.nav}>
        <div className = {s.item}>
            <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
        </div>
        <div className = {s.item}>
            <a>News</a>
        </div>
        <div className = {s.item}>
            <a>Music</a>
        </div>
        <div className = {s.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;
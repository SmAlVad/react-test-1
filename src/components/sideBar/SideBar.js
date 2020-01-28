import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './includeComponents/Logo';
import './SideBar.sass';

const SideBar = () => (
    <div className='SideBar'>
        <Logo/>
        <nav>
            <div className='nav-block'>Основной раздел</div>
            <NavLink exact={true} to="/" activeClassName="nav-active">Главная</NavLink>
            <NavLink to="/about" activeClassName="nav-active">О программе</NavLink>
        </nav>
    </div>
);

export default SideBar
import {  NavLink } from 'react-router';
import { routes } from '../../../shared/models/routes';
import '../../../styles/index.css';
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import cl from "./Header.module.css"
import { headerLinks } from '../config/headerLinks';


export const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const clickHandler = () => {
        if (isMenuOpen){
            setMenuOpen(false)
        }
    }
    return (
        <header className='md:sticky static top-0 w-[100%] pt-5 pb-5 bg-[#14131a] z-20 container flex '>
            <nav className={`${cl.menu} ${isMenuOpen ? '!translate-x-[0%]' : ''}`} >
                {headerLinks.map( (e, i) => 
                <NavLink onClick={clickHandler} className={({isActive}) => `${cl.navLink} ${isActive ? 'text-white font-bold decoration-gray-400' : 'text-gray-700 font-medium'}`} to={e.path}>{e.name}</NavLink>
                 )}
            </nav> 
            <div className='xs:hidden flex mx-auto'>
                <Hamburger color='white' toggled={isMenuOpen} toggle={setMenuOpen} />
            </div>
        </header>
    );
};

import {  NavLink } from 'react-router';
import { routes } from '../../../shared/models/routes';
import '../../../styles/index.css'

export const Header = () => {
    return (
        <header className='md:sticky static top-0 w-[100%] pt-5 pb-5 bg-[#14131a] z-20 container'>
            <nav className="container  bg-[#14131a] flex px-5 py-4 justify-between border-solid border-2 rounded-xl border-white shadow-sm shadow-black" >
                <NavLink className={({isActive}) => `font-mono md:text-2xl sm:text-xl ${isActive ? 'text-white font-bold decoration-gray-400' : 'text-gray-700 font-medium'} transition-colors duration-500`} to={routes.home}>{'All'}</NavLink>
                <NavLink className={({isActive}) => `font-mono md:text-2xl sm:text-xl ${isActive ? 'text-white font-bold decoration-gray-400' : 'text-gray-700 font-medium'} transition-colors duration-500`} to={routes.favorites}>{'Favorites'}</NavLink>
                <NavLink className={({isActive}) => `font-mono md:text-2xl sm:text-xl ${isActive ? 'text-white font-bold decoration-gray-400' : 'text-gray-700 font-medium'} transition-colors duration-500`} to={routes.create}>{'Create'}</NavLink>
                <NavLink className={({isActive}) => `font-mono md:text-2xl sm:text-xl ${isActive ? 'text-white font-bold decoration-gray-400' : 'text-gray-700 font-medium'} transition-colors duration-500`} to={routes.aboutSait}>{'About Sait'}</NavLink>
            </nav> 
        </header>
    );
};

import { Link } from 'react-router';
import { routes } from '../../../shared/models/routes';
import '../../../styles/index.css'

export const Header = () => {
    return (
        <header className='sticky top-0 w-[100%] pt-5 pb-5 bg-[#14131a] z-20 container'>
            <nav className="container  bg-[#14131a] flex px-5 py-4 justify-between border-solid border-2 rounded-xl border-white shadow-sm shadow-black" >
                <Link className='font-mono md:text-2xl sm:text-xl font-medium text-gray-700' to={routes.home}>{'All'}</Link>
                <Link className='font-mono md:text-2xl sm:text-xl font-medium text-gray-700' to={routes.home}>{'Liked'}</Link>
                <Link className='font-mono md:text-2xl sm:text-xl font-medium text-gray-700' to={routes.home}>{'Favorites'}</Link>
                <Link className='font-mono md:text-2xl sm:text-xl font-medium text-gray-700' to={routes.home}>{'About Sait'}</Link>
            </nav>
        </header>
    );
};

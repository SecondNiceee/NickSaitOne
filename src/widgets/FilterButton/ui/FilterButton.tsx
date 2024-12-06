import { Link, useNavigate } from 'react-router';
import Image from '../../../shared/ui/Image';

export const FilterButton = () => {
    return (
    <Link to={"/mobfilters"} className='gap-3 flex items-center justify-center col-start-1 col-end-13 rounded-md mt-4 py-2 border-solid border-[#2d7aff] border-2'>
        <p className='text-white text-xl font-bold'>Filters</p>
        <Image alt='#' className='w-6 h-6' imageName='filter.svg' />
    </Link>
    );
};

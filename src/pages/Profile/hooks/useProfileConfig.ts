import { TypeUser } from '../../../entitys/users';

export interface IProfileCongig{
    left : string,
    right : string,
    className : string
}

const useProfileConfig = (user : TypeUser) => {
    const config:IProfileCongig[] = [{
        left : "Email:",
        right : user.email,
        className : 'md:text-xl sm:text-lg text-base text-white text-right'
    },
    {
        left : 'Place of residence:',
        right : `${user.address.city}, ${user.address.street}`,
        className : 'md:text-xl sm:text-lg text-base text-white text-right'
    },
    {
        left : 'Budget:',
        right : user.budget + '$',
        className : 'md:text-xl sm:text-lg text-base text-right text-[#48ff23]'
    },
    {
        left : 'Company name:',
        right : user.company.name,
        className : 'md:text-xl sm:text-lg text-base text-white text-right'
    },
    {
        left : 'Company phrase',
        right : user.company.catchPhrase,
        className : 'md:text-xl sm:text-lg text-base text-white text-right'
    },
    {
        left : 'Gender:',
        right : user.gender,
        className : `md:text-xl text-lg text-white text-right relative before:absolute before:bottom-0 before:left-0 before:w-[100%] before:h-1 ${user.gender === "female" ? `before:bg-purple-400` : `before:bg-[#2d7aff]`}`
    },
    {
        left : 'Phone',
        right : user.phone,
        className : 'md:text-xl sm:text-lg text-base text-white text-right'
    },
    {
        left : 'Website:',
        right : user.website,
        className : 'md:text-xl sm:text-lg text-base text-white text-right'
    }
]
    return config;
};

export default useProfileConfig;
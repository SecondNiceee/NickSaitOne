

export const AboutSait = () => {
    return (
        <div className='flex flex-col gap-5 w-[100%] justify-center'>
            <h2 className="md:text-4xl text-3xl text-white text-center">В сайте использовались</h2>
            <ul className='flex flex-col gap-3'>
                <li className='text-2xl text-white text-center'>React/ts</li>
                <li className='text-2xl text-white text-center'>Redux toolit + RTK</li>
                <li className='text-2xl text-white text-center'>Tailwind css</li>
                <li className='text-2xl text-white text-center'>React hook form + zod</li>
                <li className='text-2xl text-white text-center'>Fsd</li>
                <li className='text-2xl text-white text-center'>Lazy loading...</li>
                <a target="_blank" rel="noopener noreferrer"  className="text-2xl text-blue-500 text-center !underline" href="https://github.com/SecondNiceee/NickSaitOne">Git hub сайта</a>
            </ul>
        </div>
    );
};

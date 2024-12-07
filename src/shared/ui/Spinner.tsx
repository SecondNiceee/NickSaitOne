import React from 'react';
import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
    return (
        <div className='h-[100%] w-[100%] flex items-center justify-center '>
            <HashLoader
                color={"white"}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Spinner;
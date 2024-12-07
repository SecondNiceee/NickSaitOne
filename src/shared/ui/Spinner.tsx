
import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
    return (
        <div className='h-[50vh] w-[100%] flex items-center justify-center '>
            <HashLoader
                color={"white"}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Spinner;
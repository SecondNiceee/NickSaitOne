import BaseProvider from './providers/BaseProvider';
import AppRoter from './AppRoter';
import "../styles/index.css"

const AppEntry = () => {
    return (
        <BaseProvider>
            <AppRoter/>
        </BaseProvider>
    );
};

export default AppEntry;
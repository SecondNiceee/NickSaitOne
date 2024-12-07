import BaseProvider from './providers/BaseProvider';
import AppRouter from './AppRouter';
import "../styles/index.css"

const AppEntry = () => {



    return (
        <BaseProvider>
            <AppRouter/>
        </BaseProvider>
    );
};

export default AppEntry;
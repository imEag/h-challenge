import { useContext } from "react";
import { PageContext } from "./context/PageContext";

import WelcomePage from './WelcomePage';
import NamesPage from './NamesPage';
import AddressPage from './AddressPage';
import ServicePage from './ServicePage';
import SubscribePage from './SubscribePage';
import SummaryPage from './SummaryPage';

const pages = {
    0: <WelcomePage></WelcomePage>,
    1: <NamesPage></NamesPage>,
    2: <AddressPage></AddressPage>,
    3: <ServicePage></ServicePage>,
    4: <SubscribePage></SubscribePage>,
    5: <SummaryPage></SummaryPage>
}

const App = () => {

    const { page } = useContext(PageContext);

    return (
        <>
            {
                pages[page] || pages[0]
            }
        </>
    )
}

export default App;
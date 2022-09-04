import { useState } from "react";

import WelcomePage from './WelcomePage';
import NamesPage from './NamesPage';
import AddressPage from './AddressPage';
import ServicePage from './ServicePage';
import SubscribePage from './SubscribePage';

const App = () => {
    
    const [page, setPage] = useState(0);
    const pages = [];

    return(
        <>

            <h2>from App</h2>
            <WelcomePage></WelcomePage>
            {/* <NamesPage></NamesPage>
            <AddressPage></AddressPage>
            <ServicePage></ServicePage>
            <SubscribePage></SubscribePage> */}
        </>    
    )
}

export default App;
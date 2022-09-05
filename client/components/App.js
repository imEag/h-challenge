import { useState } from "react";

import WelcomePage from './WelcomePage';
import NamesPage from './NamesPage';
import AddressPage from './AddressPage';
import ServicePage from './ServicePage';
import SubscribePage from './SubscribePage';

const App = () => {

    const [page, setPage] = useState(0);
    const pages = [];

    return (
        <>
            <SubscribePage></SubscribePage>
            {/* 
            <WelcomePage></WelcomePage>
            <NamesPage></NamesPage>
            <ServicePage></ServicePage>
            <AddressPage name="Cristian"></AddressPage>
            
            */}
        </>
    )
}

export default App;
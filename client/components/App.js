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
            <ServicePage></ServicePage>
            {/* 
            <WelcomePage></WelcomePage>
            <NamesPage></NamesPage>
            <AddressPage name="Cristian"></AddressPage>
            <SubscribePage></SubscribePage>
            
            */}
        </>
    )
}

export default App;
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
            <AddressPage name="Cristian" className="container"></AddressPage>
            {/* 
            <WelcomePage></WelcomePage>
            <NamesPage className="container"></NamesPage>
            <ServicePage></ServicePage>
            <SubscribePage></SubscribePage> 
        */}
        </>
    )
}

export default App;
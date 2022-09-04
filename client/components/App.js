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
            <NamesPage className="container"></NamesPage>
            {/* 
            <WelcomePage></WelcomePage>
            <AddressPage name="Cristian" className="container"></AddressPage>
            <ServicePage></ServicePage>
            <SubscribePage></SubscribePage> 
        */}
        </>
    )
}

export default App;
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
            {/* 
            <WelcomePage></WelcomePage>
            <NamesPage className="container"></NamesPage>
            <AddressPage name="Cristian" className="container"></AddressPage>
            <SubscribePage></SubscribePage> 
        */}
            <ServicePage></ServicePage>
        </>
    )
}

export default App;
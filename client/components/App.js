import { useState, useContext, useEffect } from "react";
import { PageContext } from "./context/PageContext";
import { UserDataContext } from "./context/UserDataContext";

import WelcomePage from './WelcomePage';
import NamesPage from './NamesPage';
import AddressPage from './AddressPage';
import ServicePage from './ServicePage';
import SubscribePage from './SubscribePage';

const App = () => {

    const { page, setPage } = useContext(PageContext);
    const { userData, setUserData } = useContext(UserDataContext);

    useEffect(() => {
        console.log('user context: ', userData);
        console.log('page context: ', page);
    }, [])

    return (
        <>
            <WelcomePage></WelcomePage>
            <NamesPage></NamesPage>
            <AddressPage name="Cristian"></AddressPage>
            <ServicePage></ServicePage>
            <SubscribePage></SubscribePage>
        </>
    )
}

export default App;
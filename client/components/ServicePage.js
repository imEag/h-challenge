import { useContext, useState } from "react";
import { PageContext } from "./context/PageContext";
import { UserDataContext } from "./context/UserDataContext";

import Button from "./utils/Button";
import ServiceCard from "./utils/ServiceCard";

const ServicePage = () => {

    const { page, setPage } = useContext(PageContext);
    const { userData, setUserData } = useContext(UserDataContext);

    const [service, setService] = useState("");

    const handleSubmit = evt => {
        evt.preventDefault();

        let newData = { service };

        setUserData(userData => ({
            ...userData,
            ...newData
        }));

        setPage(page + 1);
    }

    return (
        <div className="servicePage container">
            <h2>Please select the TV plan you want to enjoy:</h2>
            <form id="serviceForm" onSubmit={handleSubmit} >
                <ServiceCard
                    onChange={evt => setService("Basic")}
                    service="Basic"
                    price="30"
                    radioName="service">
                </ServiceCard>
                <ServiceCard
                    onChange={evt => setService("Premium")}
                    service="Premium"
                    price="50"
                    radioName="service">
                </ServiceCard>
            </form>
            <div className="bottom--container">
                <Button form="serviceForm" id="submit">I am ready!</Button>
                <p>Step 3 of 4</p>
            </div>
        </div>
    );
}

export default ServicePage;
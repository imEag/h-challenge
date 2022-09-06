import { useContext, useState } from "react";
import { PageContext } from "./context/PageContext";
import { UserDataContext } from "./context/UserDataContext";
import Button from "./utils/Button";

const SummaryPage = () => {
    const { page, setPage } = useContext(PageContext);
    const { userData } = useContext(UserDataContext);

    const handleClick = () => {
        setPage(0);
    }

    return (
        <div className="summaryPage">
            <div className="upper--container">
                <h2>Your summary</h2>
                <p>{`Name: ${userData.name} ${userData.lastName}`}</p>
                <p>{`Address: ${userData.address} Apt: ${userData.aptNum}`}</p>
                <p>{`Email: ${userData.email}`}</p>
                <p>{`Phone number: ${userData.phoneNum}`}</p>
                <p>{`Requested service: ${userData.service}`}</p>
            </div>
            <Button onClick={handleClick}>Back to start!</Button>
        </div>
    );
}

export default SummaryPage;
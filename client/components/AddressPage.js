import { useContext, useState } from "react";
import { PageContext } from "./context/PageContext";
import { UserDataContext } from "./context/UserDataContext";

import AddressCard from "./utils/AddressCard";
import Button from "./utils/Button";
import Input from "./utils/Input";

const AddressPage = (props) => {

    const { page, setPage } = useContext(PageContext);
    const { userData, setUserData } = useContext(UserDataContext);

    const [address, setAddress] = useState("");
    const [aptNum, setAptNum] = useState("");

    const handleSubmit = evt => {
        evt.preventDefault();
        
        let newData = { address, aptNum };

        setUserData(userData => ({
            ...userData,
            ...newData
        }));

        console.log(userData);

        setPage(page + 1);
    }

    return (
        <div className="addressPage container">
            <div className="upper--container">
                <h2>Pleasure to meet you, {props.name}!<br />What is your install address?</h2>
                <form id="addressForm" onSubmit={handleSubmit}>
                    <Input
                        value={address}
                        onChange={evt => setAddress(evt.target.value)}
                        type="text"
                        id="address"
                        name="address"
                        required={true}
                        label="Please type in your street address"
                        placeholder="Street Address, City, State">

                    </Input>
                    <Input
                        value={aptNum}
                        onChange={evt => setAptNum(evt.target.value)}
                        type="text"
                        id="aptNum"
                        name="aptNum"
                        required={true}
                        label="Apt #"
                        placeholder="Apt #">

                    </Input>
                    <p>I can't find my address</p>
                </form>
                <div className="card--container">
                    {/* <AddressCard></AddressCard>
                    <AddressCard></AddressCard>
                    <AddressCard></AddressCard> */}
                </div>
            </div>
            <div className="bottom--container">
                <Button form="addressForm" id="submit">Yes!</Button>
                <p>Step 2 of 4</p>
            </div>
        </div>
    );
}

export default AddressPage;
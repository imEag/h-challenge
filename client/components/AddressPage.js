import { useContext, useEffect, useState } from "react";
import { PageContext } from "./context/PageContext";
import { UserDataContext } from "./context/UserDataContext";

import AddressCard from "./utils/AddressCard";
import Button from "./utils/Button";
import Input from "./utils/Input";

import axios from "axios";

const AddressPage = (props) => {

    const { page, setPage } = useContext(PageContext);
    const { userData, setUserData } = useContext(UserDataContext);

    const [address, setAddress] = useState("");
    const [aptNum, setAptNum] = useState("");
    const [buildings, setBuildings] = useState([])

    const getBuildings = async () => {

        let params = { query: 'st' }
        let result = await axios.get('http://localhost:5000/server/buildings', { params });
        
        setBuildings(result.data.data);
        console.log(result.data.data);

    };

    const handleSubmit = evt => {
        evt.preventDefault();

        let newData = { address, aptNum };

        setUserData(userData => ({
            ...userData,
            ...newData
        }));

        setPage(page + 1);
    }

    useEffect(() => {
        getBuildings();
    }, []);

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
                        autoComplete="off"
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
                        autoComplete="off"
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
import { useContext, useEffect, useState } from "react";
import { PageContext } from "./context/PageContext";
import { UserDataContext } from "./context/UserDataContext";
import axios from "axios";

import AddressCard from "./utils/AddressCard";
import Button from "./utils/Button";
import Input from "./utils/Input";

const AddressPage = (props) => {
    const { page, setPage } = useContext(PageContext);
    const { userData, setUserData } = useContext(UserDataContext);

    const [address, setAddress] = useState("");
    const [aptNum, setAptNum] = useState("");
    const [query, setQuery] = useState("");
    const [buildings, setBuildings] = useState([]);

    const fetchBuildings = async query => {
        let params = { query };
        try {
            let { data } = await axios.get('http://localhost:5000/server/buildings', { params });
            setBuildings(data.data);
        } catch (error) {
            console.log(error)
        }
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

    const handleAddressChange = (evt) => {
        setAddress(evt.target.value);
        setQuery(evt.target.value);
        query ? fetchBuildings(query) : null;
    }

    useEffect(() => {
    }, [query])

    return (
        <div className="addressPage container">
            <div className="upper--container">
                <h2>Pleasure to meet you, {props.name}!<br />What is your install address?</h2>
                <form id="addressForm" onSubmit={handleSubmit}>
                    <Input
                        value={address}
                        onChange={handleAddressChange}
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
                {
                    query ?
                        <div className="card--container">
                            {
                                buildings.map(el => {
                                    return (
                                        <div key={el._id}>
                                            <h1>{el.name}</h1>
                                            <p>{el.addres}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        : null
                }

            </div>
            <div className="bottom--container">
                <Button form="addressForm" id="submit">Yes!</Button>
                <p>Step 2 of 4</p>
            </div>
        </div>
    );
}

export default AddressPage;
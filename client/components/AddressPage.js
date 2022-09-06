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
    const [buildings, setBuildings] = useState([]);
    const [selected, setSelected] = useState(false);

    const fetchBuildings = async query => {
        if (query == "") return [];

        let params = { query };
        try {
            let { data } = await axios.get('http://imeag.site/server/buildings', { params });
            return data.data;
        } catch (error) {
            return [];
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

    const handleAddressChange = async (evt) => {
        let searchQuery = evt.target.value;
        setAddress(searchQuery);

        let searchResult = await fetchBuildings(searchQuery);
        setBuildings(searchResult);
    }

    const handleSelect = building => {
        let buildingAddress = `${building.address}, ${building.city}, ${building.state}, ${building.postal}`
        
        setAddress(buildingAddress);
        setSelected(true);
        setBuildings([building])
    }

    const handleClose = () => {
        setAddress("");
        setSelected(false);
        setBuildings([]);
    }

    return (
        <div className="addressPage container">
            <div className="upper--container">
                <h2>Pleasure to meet you, {userData.name || ""}!<br />What is your install address?</h2>
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
                    buildings.length != 0 ?
                        <div className="card--container">
                            {
                                buildings.map(building => {
                                    return (
                                        <AddressCard
                                            key={building._id}
                                            name={building.name}
                                            address={building.address}
                                            city={building.city}
                                            state={building.state}
                                            postal={building.postal}
                                            onSelect={() => handleSelect(building)}
                                            onClose={handleClose}
                                            selected={selected}
                                        ></AddressCard>
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
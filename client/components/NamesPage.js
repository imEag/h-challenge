import { useContext, useState } from "react";
import { PageContext } from "./context/PageContext";
import { UserDataContext } from "./context/UserDataContext";

import Input from "./utils/Input";
import Button from "./utils/Button";

const NamesPage = () => {

    const { page, setPage } = useContext(PageContext);
    const { userData, setUserData } = useContext(UserDataContext);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = evt => {
        evt.preventDefault();

        setUserData(userData["name"] = name);
        setUserData(userData["lastName"] = lastName);

        setPage(page + 1);
    }

    return (
        <div className="namesPage container">
            <div className="upper--container">
                <h2>Awesome! Let's get started with the basics.</h2>
                <form id="nameForm" onSubmit={handleSubmit}>
                    <Input
                        value={name}
                        onChange={evt => setName(evt.target.value)}
                        type="text"
                        id="name"
                        name="name"
                        required={true}
                        label="First Name">
                    </Input>
                    <Input
                        value={lastName}
                        onChange={evt => setLastName(evt.target.value)}
                        type="text"
                        id="lastname"
                        name="lastname"
                        label="Last Name">
                    </Input>
                </form>
            </div>
            <div className="bottom--container">
                <Button form="nameForm" id="submit">Next</Button>
                <p>Step 1 of 4</p>
            </div>
        </div>
    );
}

export default NamesPage;
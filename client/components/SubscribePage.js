import { useContext, useState } from "react";
import { PageContext } from "./context/PageContext";
import { UserDataContext } from "./context/UserDataContext";

import Input from "./utils/Input";
import Button from "./utils/Button";

const SubscribePage = () => {

    const { page, setPage } = useContext(PageContext);
    const { setUserData } = useContext(UserDataContext);

    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

    const handleNumberchange = (evt) => {
        let number = evt.target.value
        setPhoneNum(formatPhoneNumber(number));
    }

    const formatPhoneNumber = phoneNumberString => {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return phoneNumberString;
    }

    const handleSubmit = evt => {
        evt.preventDefault();

        let newData = { email, phoneNum };

        setUserData(userData => ({
            ...userData,
            ...newData
        }));

        setPage(page + 1);
    }


    return (
        <div className="subscribePage container">
            <div className="upper--container">
                <div className="upper__title--container">
                    <h2>Great news! Your first month's free!</h2>
                    <p>To get set up, just provide your email and phone number and we can remind you when the free trial ends.</p>
                </div>
                <form id="subscribeForm" onSubmit={handleSubmit}>
                    <Input
                        value={email}
                        onChange={evt => setEmail(evt.target.value)}
                        type="email"
                        id="email"
                        name="email"
                        required={true}
                        label="Email">
                    </Input>
                    <Input
                        value={phoneNum}
                        onChange={handleNumberchange}
                        type="tel"
                        id="phone"
                        name="phone"
                        required={true}
                        label="Phone number">
                    </Input>
                    <p>I have a promo code!</p>
                </form>
            </div>
            <div className="bottom--container">
                <Button form="subscribeForm" id="submit">Subscribe now!</Button>
                <p>Step 4 of 4</p>
            </div>
        </div>
    );
}

export default SubscribePage;
import Button from "./utils/Button";
import Input from "./utils/Input";

const AddressPage = (props) => {

    return (
        <div className="addressPage">
            <h2>Pleasure to meet you, {props.name}!<br />What is your install address?</h2>
            <div className="address__data--container">
                <div className="data__input--container"></div>
                <Input label="Please type in your street address" placeholder="Street Address, City, State"></Input>
                <Input label="Apt #" placeholder="Apt #"></Input>
                <p>I can't find my address</p>
            </div>
            <Button>Yes!</Button>
            <p>Step 2 of 4</p>
        </div>
    );
}

export default AddressPage;
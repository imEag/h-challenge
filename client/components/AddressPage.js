import Button from "./utils/Button";
import Input from "./utils/Input";

const AddressPage = (props) => {

    return (
        <div className="addressPage container">
            <div className="upper--container">
                <h2>Pleasure to meet you, {props.name}!<br />What is your install address?</h2>
                <form>
                    <Input label="Please type in your street address" placeholder="Street Address, City, State"></Input>
                    <Input label="Apt #" placeholder="Apt #"></Input>
                    <p>I can't find my address</p>
                </form>
            </div>
            <div className="bottom--container">
                <Button>Yes!</Button>
                <p>Step 2 of 4</p>
            </div>
        </div>
    );
}

export default AddressPage;
import AddressCard from "./utils/AddressCard";
import Button from "./utils/Button";
import Input from "./utils/Input";

const AddressPage = (props) => {

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log('submitted');
    }

    return (
        <div className="addressPage container">
            <div className="upper--container">
                <h2>Pleasure to meet you, {props.name}!<br />What is your install address?</h2>
                <form id="addressForm" onSubmit={handleSubmit}>
                    <Input type="text" id="address" name="address" required={true} label="Please type in your street address" placeholder="Street Address, City, State"></Input>
                    <Input type="text" id="aptNum" name="aptNum" required={true} label="Apt #" placeholder="Apt #"></Input>
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
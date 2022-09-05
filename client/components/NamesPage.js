import Input from "./utils/Input";
import Button from "./utils/Button";

const NamesPage = () => {

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log('submitted');
    }

    return (
        <div className="namesPage container">
            <div className="upper--container">
                <h2>Awesome! Let's get started with the basics.</h2>
                <form id="nameForm" onSubmit={handleSubmit}>
                    <Input type="text" id="name" name="name" required={true} label="First Name"></Input>
                    <Input type="text" id="lastname" name="lastname" label="Last Name"></Input>
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
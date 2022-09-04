import Input from "./utils/Input";
import Button from "./utils/Button";

const NamesPage = () => {

    return (
        <div className="namesPage">
            <h2>Awesome! Let's get started with the basics.</h2>
            <form>
                <Input label="First Name"></Input>
                <Input label="Last Name"></Input>
            </form>
            <Button>Next</Button>
            <p>Step 1 of 4</p>
        </div>
    );
}

export default NamesPage;
import ReactiveInput from "./utils/ReactiveInput";
import Button from "./utils/Button";

const NamesPage = () => {

    return (
        <div className="namesPage">
            <h2>Awesome! Let's get started with the basics.</h2>
            <form>
                <ReactiveInput label="My input 1"></ReactiveInput>
                <ReactiveInput label="My input 2"></ReactiveInput>
            </form>
            <Button>Next</Button>
            <p>Step 1 of 4</p>
        </div>
    );
}

export default NamesPage;
import Input from "./utils/Input";
import Button from "./utils/Button";

const SubscribePage = () => {

    return (
        <div className="subscribePage container">
            <div className="upper--container">
                <div className="upper__title--container">
                    <h2>Great news! Your first month's free!</h2>
                    <p>To get set up, just provide your email and phone number and we can remind you when the free trial ends.</p>
                </div>
                <form>
                    <Input label="Email"></Input>
                    <Input label="Phone number"></Input>
                    <p>I have a promo code!</p>
                </form>
            </div>
            <div className="bottom--container">
                <Button>Subscribe now!</Button>
                <p>Step 4 of 4</p>
            </div>
        </div>
    );
}

export default SubscribePage;
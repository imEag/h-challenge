import Input from "./utils/Input";
import Button from "./utils/Button";

const SubscribePage = () => {

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log('submitted');
    }

    return (
        <div className="subscribePage container">
            <div className="upper--container">
                <div className="upper__title--container">
                    <h2>Great news! Your first month's free!</h2>
                    <p>To get set up, just provide your email and phone number and we can remind you when the free trial ends.</p>
                </div>
                <form id="subscribeForm" onSubmit={handleSubmit}>
                    <Input type="email" id="email" name="email" required={true} label="Email"></Input>
                    <Input type="number" id="phone" name="phone" required={false} label="Phone number"></Input>
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
import Button from "./utils/Button";

const WelcomePage = () => {
    return (
        <div className="welcomePage container">
            <div className="upper--container">
                <h1>The Best TV service around!</h1>
                <h2>Are you ready to enjoy ultra-best service?</h2>
            </div>
            <Button>Let's do It!</Button>
        </div>
    );
}

export default WelcomePage;
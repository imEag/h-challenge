import Button from "./utils/Button";
import ServiceCard from "./utils/ServiceCard";

const ServicePage = () => {

    return (
        <div className="servicePage container">
            <h2>Please select the TV plan you want to enjoy:</h2>
            <div className="service--container">
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
            <div className="bottom--container">
                <Button>I am ready!</Button>
                <p>Step 3 of 4</p>
            </div>
        </div>
    );
}

export default ServicePage;
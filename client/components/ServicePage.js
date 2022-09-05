import Button from "./utils/Button";
import ServiceCard from "./utils/ServiceCard";

const ServicePage = () => {

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log('submitted');
    }


    return (
        <div className="servicePage container">
            <h2>Please select the TV plan you want to enjoy:</h2>
            <form id="serviceForm" onSubmit={handleSubmit} >
                <ServiceCard service="Basic" price="30" radioName="service" ></ServiceCard>
                <ServiceCard service="Premium" price="50" radioName="service" ></ServiceCard>
            </form>
            <div className="bottom--container">
                <Button form="serviceForm" id="submit">I am ready!</Button>
                <p>Step 3 of 4</p>
            </div>
        </div>
    );
}

export default ServicePage;
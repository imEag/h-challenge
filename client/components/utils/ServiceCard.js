const ServiceCard = (props) => {

    return (
        <div className="serviceCard">
            <div className="title--container">
                <h3>{props.service || "Service"}</h3>
                <p>Service</p>
            </div>
            <p className="x">x</p>
            <div className="number">{props.price || "Not available"}</div>
            <input required type="radio" value={props.price || 0} name={props.radioName}></input>
        </div>
    )
}

export default ServiceCard;
const ServiceCard = (props) => {

    return (
        <label htmlFor={props.service} className="serviceCard">
            <div className="title--container">
                <h3>{props.service || "Service"}</h3>
                <p>Service</p>
            </div>
            <p className="x">x</p>
            <div className="number">{props.price || "Not available"}</div>
            <input
                onChange={props.onChange}
                required
                type="radio"
                value={props.service || "Unknown"}
                name={props.radioName}
                id={props.service}
                ></input>
        </label>
    )
}

export default ServiceCard;
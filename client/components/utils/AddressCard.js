import Button from "./Button";
import closeImg from './../../img/close.png';

const AddressCard = (props) => {

    return (
        <div className="addressCard">
            <div className="left--container">
                <h3>{props.name || ""}</h3>
                <p>{props.address || ""}, {props.city || ""}, {props.state || ""}, {props.postal || ""}</p>
            </div>
            {
                props.selected
                    ? <img className="closeButton" onClick={props.onClose} src={closeImg} />
                    : <Button onClick={props.onSelect}>Select</Button>
            }
        </div>
    )
}

export default AddressCard;
const Input = (props) => {
    return (
        <div className="Input">
            <input required={props.required} type={props.type || "text"} name={props.name || ""} id={props.id || "text1"} placeholder={props.placeholder || props.label} />
            {props.label ? <label htmlFor={props.id || "text1"} >{props.label}</label> : null}
        </div >
    );
}

export default Input;
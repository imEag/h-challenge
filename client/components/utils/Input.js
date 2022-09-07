const Input = (props) => {

    return (
        <div className="Input"  >
            <input
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                type={props.type || "text"}
                name={props.name || ""}
                id={props.id || "text1"}
                autoComplete={props.autoComplete || "on"}
                placeholder={props.placeholder || props.label}
                disabled={props.selected}
            ></input>

            {props.label ? <label disabled={props.selected} htmlFor={props.id || "text1"} >{props.label}</label> : null}
        </div >
    );
}

export default Input;
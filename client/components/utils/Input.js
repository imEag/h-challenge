const Input = (props) => {
    return (
        <div className="Input">
            <input type="text" name="" id="text1" placeholder={props.placeholder || props.label} />
            { props.label ? <label htmlFor="text1">{props.label}</label> : null}
        </div >
    );
}

export default Input;
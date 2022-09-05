const Button = (props) => {
    return (
        <button onClick={props.onClick} form={props.form} className="btn">{props.children}</button>
    )
}

export default Button;
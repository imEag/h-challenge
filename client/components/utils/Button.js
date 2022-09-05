const Button = (props) => {
    return (
        <button form={props.form} className="btn">{props.children}</button>
    )
}

export default Button;
const ReactiveInput = (props) => {
    return (
        <div className="reactiveInput">
            <input type="text" name="" id="text1" placeholder="" />
            <label htmlFor="text1">{props.label}</label>
        </div >
    );
}

export default ReactiveInput;
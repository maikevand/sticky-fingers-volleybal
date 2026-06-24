import "./FormField.css"

function FormField( {htmlFor, text, type, id, name} ) {
    return (
        <label htmlFor={htmlFor} className="form-field">
            {text}
            <input type={type} id={id} name={name} />
        </label>
    );
}

export default FormField;
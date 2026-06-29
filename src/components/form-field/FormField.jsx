import "./FormField.css"

function FormField({htmlFor, text, type, id, name, placeholder}) {
    return (
        <label
            htmlFor={htmlFor}
            className="form-field">
            {text}
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
            />
        </label>
    );
}

export default FormField;
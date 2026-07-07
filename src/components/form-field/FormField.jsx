import "./FormField.css"

function FormField({label, type, id, name, placeholder, maxLength}) {
    return (
        <label
            htmlFor={id}
            className="form-field">
            {label}
            <input
                type={type}
                id={id}
                name={name}
                maxLength={maxLength}
                placeholder={placeholder}
            />
        </label>
    );
}

export default FormField;
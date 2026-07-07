import "./FormField.css"

function FormField({label, type, id, name, value, placeholder, maxLength, changeHandler}) {
    return (
        <label
            htmlFor={id}
            className="form-field">
            {label}
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={changeHandler}
            />
        </label>
    );
}

export default FormField;
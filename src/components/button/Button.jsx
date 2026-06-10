import "./Button.css"

function Button({type, className, text}) {
    return (
        <button
            type={type}
            className={className}>
            {/*disabled={disabled}*/}
            {/*onClick={action} NB dan ook nog boven meegeven en > teken verplaatsen achter deze zin*/}
            {text}
        </button>
    );
}

export default Button;
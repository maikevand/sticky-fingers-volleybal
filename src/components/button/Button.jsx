import "./Button.css"

function Button({type, className, text}) {
    return (
        <button
            type={type}
            className={className}>
            {/*disabled={disabled}*/}
            {/*onClick={action} NB dan ook nog boven meegeven en > teken verplaatsen achter deze zin*/}
            {/*ev. variant primary toevoegen voor verschillende opmaak? Zie uitwerkingen react blog part 2*/}
            {text}
        </button>
    );
}

export default Button;
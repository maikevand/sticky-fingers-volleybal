import "./Button.css"

function Button({type, className, text, onClick}) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}>
            {/*disabled={disabled}*/}
            {/*ev. variant primary toevoegen voor verschillende opmaak? Zie uitwerkingen react blog part 2*/}
            {text}
        </button>
    );
}

export default Button;
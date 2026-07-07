import "./Contact.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import Button from "../../components/button/Button.jsx"
import FormField from "../../components/form-field/FormField.jsx";
import {useState} from "react";

function Contact() {

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    function handleFormChange(event) {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return (

        <PageLayout className="contact-page">
            <h1>Contact</h1>
            <p>Heb je vragen of wil je vrijblijvend een keer meespelen?
                Stuur ons een bericht via onderstaand formulier!
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <FormField
                    label="Voornaam"
                    type="text"
                    id="first-name-field"
                    name="firstName"
                    value={formState.firstName}
                    maxLength={35}
                    changeHandler={handleFormChange}
                />
                <FormField
                    label="Achternaam"
                    type="text"
                    id="last-name-field"
                    name="lastName"
                    value={formState.lastName}
                    maxLength={35}
                    changeHandler={handleFormChange}
                />
                <FormField
                    label="E-mail"
                    type="email"
                    id="contact-email-field"
                    name="email"
                    value={formState.email}
                    maxLength={50}
                    changeHandler={handleFormChange}
                />
                <FormField
                    label="Telefoonnummer"
                    type="tel"
                    id="telephone-field"
                    name="phoneNumber"
                    value={formState.phoneNumber}
                    maxLength={13}
                    changeHandler={handleFormChange}
                />
                <label htmlFor="message-field" className="textarea-label">
                    Bericht
                </label>
                <textarea
                    name="message"
                    id="message-field"
                    value={formState.message}
                    onChange={handleFormChange}
                    cols={30}
                    rows={10}
                    maxLength={400}
                    placeholder="Stel hier je vraag of je verzoek wanneer je wil meespelen"
                />
                <Button
                    type="submit"
                    text="Verzenden"
                />
            </form>
        </PageLayout>
    );
}

export default Contact;
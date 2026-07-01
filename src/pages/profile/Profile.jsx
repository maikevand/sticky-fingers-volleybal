import "./Profile.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import Button from "../../components/button/Button.jsx";

function Profile() {
    return (
        <PageLayout className="profile-page">
            <h1>Profiel</h1>
            <section className="user-data-section">
                <p><strong>Naam: </strong>Voornaam Achternaam</p>
                <p><strong>E-mailadres: </strong>emailadres@outlook.com</p>
            </section>
            <Button
                type="button"
                text="Uitloggen"
            />
        </PageLayout>
    );
}

export default Profile;
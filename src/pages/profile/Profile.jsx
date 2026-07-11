import "./Profile.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import Button from "../../components/button/Button.jsx";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

function Profile() {
    const {logout, user, status} = useContext(AuthContext);

    return (
        <PageLayout className="profile-page">
            <h1>Profiel</h1>
            <section className="user-data-section">
                <p>
                    Je bent ingelogd met e-mailadres: <strong>{user?.email}</strong>
                </p>
            </section>
            <Button
                type="button"
                text="Uitloggen"
                onClick={logout}
            />
        </PageLayout>
    );
}

export default Profile;
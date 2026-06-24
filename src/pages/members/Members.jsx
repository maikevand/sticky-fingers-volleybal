import "./Members.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import LockIcon from "../../assets/lock-icon.svg?react";
import Button from "../../components/button/Button.jsx";

function Members() {
    return (
        <PageLayout className="members-page">
            <h1>Voor leden</h1>
            <section className="members-intro">
                <LockIcon className="lock-icon"/>
                <div>
                <p>Dit deel is alleen voor leden.</p>
                <p>Log in om speeldata en polls te bekijken.</p>
                </div>
                <Button
                    type="button"
                    text="Inloggen"
                />
            </section>
        </PageLayout>
    );
}

export default Members;
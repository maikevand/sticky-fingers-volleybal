import "./Members.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import LockIcon from "../../assets/lock-icon.svg?react";

function Members() {
    return (
        <PageLayout className="members-page">
            <h1>Voor leden</h1>
            <section>
                <LockIcon className="lock-icon"/>
                <p>Dit deel is alleen voor leden.</p>
                <p>Log in om speeldata en polls te bekijken.</p>
            </section>
        </PageLayout>
    );
}

export default Members;
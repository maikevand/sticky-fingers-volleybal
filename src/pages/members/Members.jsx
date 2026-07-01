import "./Members.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import LockIcon from "../../assets/lock-icon.svg?react";
import MemberCard from "../../components/member-card/MemberCard.jsx";
import CalendarIcon from "../../assets/calendar-icon.svg?react";
import PollsIcon from "../../assets/polls-icon.svg?react";
import {Link} from "react-router-dom";

function Members() {
    return (
        <PageLayout className="members-page">
            <h1>Voor leden</h1>
            <section className="members-intro">
                <LockIcon className="lock-icon"/>
                <div>
                    <p>Dit deel is alleen voor leden.</p>
                    <p>Log in om speeldata en peilingen te bekijken.</p>
                </div>
                <Link to="/inloggen" className="button">
                    Inloggen
                </Link>
            </section>

            <section className="member-cards-section">
                <MemberCard
                    Icon={CalendarIcon}
                    buttonText="Log eerst in"
                    disabled
                />
                <MemberCard
                    Icon={PollsIcon}
                    buttonText="Log eerst in"
                    disabled
                />
            </section>

        </PageLayout>
    );
}

export default Members;
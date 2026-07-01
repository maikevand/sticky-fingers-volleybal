import "./Polls.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import PollCard from "../../components/poll-card/PollCard.jsx";
import {Link} from "react-router-dom";

function Polls() {
    const options = [
        {
            id: 1,
            answer: "Ja, gezellig! Ik wil wel meegaan met het etentje!",
            votes: 8,
        },
        {
            id: 2,
            answer: "Nee, ik kan niet. En eigenlijk heb ik er ook helemaal geen zin in.",
            votes: 3,
        },
    ];

    return (
        <PageLayout className="polls-page">
            <div className="polls-title-section">
                <h1>Peilingen</h1>
                <p>Stem mee over onderwerpen binnen de club of maak zelf een nieuwe peiling aan.</p>
                <Link to="/nieuwe-peiling" className="button">
                    Nieuwe peiling
                </Link>
            </div>
            <PollCard
                title="Ga je mee uit eten 18 augustus? En hierbij weer een test met een langere tekst."
                options={options}
            />
        </PageLayout>
    )
}

export default Polls;
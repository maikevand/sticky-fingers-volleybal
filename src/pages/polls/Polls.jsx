import "./Polls.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import PollCard from "../../components/poll-card/PollCard.jsx";
import {Link} from "react-router-dom";

function Polls() {
    const polls = [
        {
            id: 1,
            title: "Ga je mee uit eten op 18 augustus?",
            options: [
                {
                    id: 1,
                    answer: "Ja, gezellig! Ik wil wel meegaan met het etentje!",
                    votes: 8,
                },
                {
                    id: 2,
                    answer: "Nee, ik kan niet.",
                    votes: 3,
                },
            ],
        },
        {
            id: 2,
            title: "Wie wil doorspelen in de kerstvakantie?",
            options: [
                {
                    id: 1,
                    answer: "Ja, ik speel graag door.",
                    votes: 6,
                },
                {
                    id: 2,
                    answer: "Nee, ik sla even over.",
                    votes: 2,
                },
                {
                    id: 3,
                    answer: "Misschien, ik weet het nog niet.",
                    votes: 4,
                },
            ],
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
            <div className="polls-list">
                {polls.map((poll) => (
                    <PollCard
                        key={poll.id}
                        poll={poll}
                    />
                ))}
            </div>
        </PageLayout>
    )
}

export default Polls;
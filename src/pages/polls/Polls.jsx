import "./Polls.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import Button from "../../components/button/Button.jsx";
import PollCard from "../../components/poll-card/PollCard.jsx";

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
                <Button
                    type="button"
                    text="Nieuwe peiling"
                />
            </div>
            <PollCard
                title="Ga je mee uit eten 18 augustus? En hierbij weer een test met een langere tekst."
                options={options}
            />
        </PageLayout>
    )
}

export default Polls;
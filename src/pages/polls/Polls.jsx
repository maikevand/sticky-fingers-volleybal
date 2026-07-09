import "./Polls.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import PollCard from "../../components/poll-card/PollCard.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Polls() {
    const [polls, setPolls] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const projectId = import.meta.env.VITE_NOVI_PROJECT_ID;

    useEffect(() => {
        async function fetchPolls() {
            setIsLoading(true);
            setErrorMessage("");

            try {
                const response = await axios.get(`${baseUrl}/polls`, {
                    headers: {
                        "novi-education-project-id": projectId,
                    },
                });

                setPolls(response.data);
            } catch (error) {
                console.error(error);
                setErrorMessage("Peilingen konden niet worden opgehaald.");
            } finally {
                setIsLoading(false);
            }
        }

        fetchPolls();
    }, []);

    async function handleVote(poll, selectedOptionId) {
        if (!selectedOptionId) {
            setErrorMessage("Kies eerst een optie voordat je stemt.");
            return;
        }

        setErrorMessage("");

        const updatedVoteData =
            selectedOptionId === "optionOne"
                ? {optionOneVotes: poll.optionOneVotes + 1}
                : {optionTwoVotes: poll.optionTwoVotes + 1};

        try {
            const response = await axios.patch(`${baseUrl}/polls/${poll.id}`,
                updatedVoteData,
                {
                    headers: {
                        "novi-education-project-id": projectId,
                    },
                });

            setPolls((currentPolls) =>
            currentPolls.map((currentPoll) =>
            currentPoll.id === poll.id ? response.data : currentPoll
            ));
        } catch (error) {
            console.error(error);
            setErrorMessage("Stem kon niet worden ingediend. Probeer opnieuw.");
        }
    }

    return (
        <PageLayout className="polls-page">
            <div className="polls-title-section">
                <h1>Peilingen</h1>
                <p>Stem mee over onderwerpen binnen de club of maak zelf een nieuwe peiling aan.</p>
                <Link to="/nieuwe-peiling" className="button">
                    Nieuwe peiling
                </Link>
            </div>

            {isLoading && <p>Peilingen worden geladen...</p>}

            <div className="polls-list">
                {polls.map((poll) => (
                    <PollCard
                        key={poll.id}
                        poll={poll}
                        onVote={handleVote}
                    />
                ))}
            </div>
        </PageLayout>
    )
}

export default Polls;
import "./Polls.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import PollCard from "../../components/poll-card/PollCard.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {compareDesc, parseISO} from "date-fns";
import {AuthContext} from "../../context/AuthContext.jsx";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const projectId = import.meta.env.VITE_NOVI_PROJECT_ID;

function Polls() {
    const [polls, setPolls] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [pollVotes, setPollVotes] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchPolls() {
            setIsLoading(true);
            setErrorMessage("");

            try {
                const pollsResponse = await axios.get(`${baseUrl}/polls`, {
                    signal: controller.signal,
                    headers: {
                        "novi-education-project-id": projectId,
                    },
                });

                const votesResponse = await axios.get(`${baseUrl}/pollVotes`, {
                    signal: controller.signal,
                    headers: {
                        "novi-education-project-id": projectId,
                    },
                });

                const latestPolls = [...pollsResponse.data]
                    .sort((pollA, pollB) =>
                        compareDesc(
                            parseISO(pollA.createdAt),
                            parseISO(pollB.createdAt)
                        )
                    )
                    .slice(0, 10);

                setPolls(latestPolls);
                setPollVotes(votesResponse.data);
            } catch (error) {
                if (axios.isCancel(error) || error.name === "CanceledError") {
                    return;
                }
                setErrorMessage("Peilingen konden niet worden opgehaald.");
            } finally {
                setIsLoading(false);
            }
        }

        void fetchPolls();

        return function cleanup() {
            controller.abort();
        };
    }, []);

    async function handleVote(poll, selectedOption) {
        if (!selectedOption) {
            setErrorMessage("Kies eerst een optie voordat je stemt.");
            return;
        }

        setErrorMessage("");

        const existingVote = pollVotes.find((vote) =>
            vote.userId === user.id && vote.pollId === poll.id
        );

        if (existingVote) {
            setErrorMessage("Je hebt al op deze peiling gestemd.");
            return;
        }

        const newVoteData = {
            userId: user.id,
            pollId: poll.id,
            selectedOption: selectedOption,
        };

        try {
            const response = await axios.post(`${baseUrl}/pollVotes`,
                newVoteData,
                {
                    headers: {
                        "novi-education-project-id": projectId,
                    },
                });

            setPollVotes((currentVotes) => [
                ...currentVotes,
                response.data,
            ]);
        } catch {
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

            {errorMessage && (
                <p className="polls-error-message">
                    {errorMessage}
                </p>
            )}

            <div className="polls-list">
                {polls.map((poll) => (
                    <PollCard
                        key={poll.id}
                        poll={poll}
                        onVote={handleVote}
                        optionOneVotes={
                            pollVotes.filter((vote) =>
                                vote.pollId === poll.id &&
                                vote.selectedOption === "optionOne"
                            ).length
                        }
                        optionTwoVotes={
                            pollVotes.filter((vote) =>
                                vote.pollId === poll.id &&
                                vote.selectedOption === "optionTwo"
                            ).length
                        }
                    />
                ))}
            </div>
        </PageLayout>
    );
}

export default Polls;
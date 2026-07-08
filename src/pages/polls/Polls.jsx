import "./Polls.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import PollCard from "../../components/poll-card/PollCard.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Polls() {
    // const polls = [
    //     {
    //         id: 1,
    //         title: "Ga je mee uit eten op 18 augustus?",
    //         options: [
    //             {
    //                 id: 1,
    //                 answer: "Ja, gezellig! Ik wil wel meegaan met het etentje!",
    //                 votes: 8,
    //             },
    //             {
    //                 id: 2,
    //                 answer: "Nee, ik kan niet.",
    //                 votes: 3,
    //             },
    //         ],
    //     },
    //     {
    //         id: 2,
    //         title: "Wie wil doorspelen in de kerstvakantie?",
    //         options: [
    //             {
    //                 id: 1,
    //                 answer: "Ja, ik speel graag door.",
    //                 votes: 6,
    //             },
    //             {
    //                 id: 2,
    //                 answer: "Nee, ik sla even over.",
    //                 votes: 2,
    //             },
    //             {
    //                 id: 3,
    //                 answer: "Misschien, ik weet het nog niet.",
    //                 votes: 4,
    //             },
    //         ],
    //     },
    // ];

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
                    headers : {
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
                <p className="poll-error-message">
                    {errorMessage}
                </p>
            )}

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
import "./PlayDates.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {addDays, format} from "date-fns";
import {nl} from "date-fns/locale";
import {AuthContext} from "../../context/AuthContext.jsx";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const projectId = import.meta.env.VITE_NOVI_PROJECT_ID;

function PlayDates() {
    const [attendance, setAttendance] = useState({});
    const [playDateVotes, setPlayDateVotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const today = new Date();
    const currentDay = today.getDay();
    const {user} = useContext(AuthContext);

    let daysUntilFriday;

    if (currentDay <= 5) {
        daysUntilFriday = 5 - currentDay;
    } else {
        daysUntilFriday = 7 - currentDay + 5;
    }

    const nextFriday = addDays(today, daysUntilFriday);

    const playDates = [0, 7, 14].map((daysToAdd, index) => {
        const date = addDays(nextFriday, daysToAdd);

        return {
            id: index + 1,
            date: format(date, "yyyy-MM-dd"),
            displayDate: format(date, "d MMM", {locale: nl}),
        };
    });

    async function handleAttendanceChange(playDate, value) {
        if (!user) {
            return;
        }

        const token = localStorage.getItem("token");

        setAttendance({
            ...attendance,
            [playDate.id]: value,
        });

        const matchingVote = playDateVotes.find((vote) => {
            return (
                vote.userId === user.id &&
                vote.date === playDate.date
            );
        });

        const isAttending = value === "yes";

        if (!matchingVote) {
            try {
                await axios.post(`${baseUrl}/playDateVotes`, {
                        userId: user.id,
                        date: playDate.date,
                        attendance: isAttending,
                    },
                    {
                        headers: {
                            "novi-education-project-id": projectId,
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                await fetchPlayDateVotes();
            } catch {
                setErrorMessage("Je stem kon niet worden verwerkt.");
            }
        }

        if (matchingVote) {
            try {
                await axios.patch(`${baseUrl}/playDateVotes/${matchingVote.id}`,
                    {
                        attendance: isAttending,
                    },
                    {
                        headers: {
                            "novi-education-project-id": projectId,
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                await fetchPlayDateVotes();
            } catch {
                setErrorMessage("Je stem kon niet worden verwerkt.");
            }
        }
    }

    async function fetchPlayDateVotes(signal) {
        setIsLoading(true);
        setErrorMessage("");

        try {
            const response = await axios.get(`${baseUrl}/playDateVotes`, {
                signal: signal,
                headers: {
                    "novi-education-project-id": projectId,
                },
            });

            setPlayDateVotes(response.data);
        } catch (error) {
            if (axios.isCancel(error) || error.name === "CanceledError") {
                return;
            }
            setErrorMessage("De totalen konden niet worden opgehaald.");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const controller = new AbortController();

        void fetchPlayDateVotes(controller.signal);

        return function cleanup() {
            controller.abort();
        };
    }, []);

    return (
        <PageLayout className="play-dates-page">
            <h1>Speeldata</h1>
            <p>📍 Gymzaal Eekbrouwersweg 2</p>
            <p>🕗 20:00-21:30</p>

            {isLoading && <p>Laden...</p>}
            {errorMessage && (
                <p className="play-dates-error-message">
                    {errorMessage}
                </p>
            )}

            <table className="play-dates-table">
                <thead>
                <tr>
                    <th>Datum</th>
                    <th>Aanwezig?</th>
                    <th>Totaal</th>
                </tr>
                </thead>
                <tbody>
                {playDates.map((playDate) => {
                    const votesForThisDate = playDateVotes.filter((vote) => {
                        return (
                            vote.date === playDate.date &&
                            vote.attendance === true
                        );
                    });

                    const totalAttendance = votesForThisDate.length;

                    const userVoteForThisDate = playDateVotes.find((vote) => {
                        return (
                            vote.userId === user?.id &&
                            vote.date === playDate.date
                        );
                    });

                    const selectedAttendance =
                        attendance[playDate.id] ??
                        (userVoteForThisDate?.attendance === true
                            ? "yes"
                            : userVoteForThisDate?.attendance === false
                                ? "no"
                                : undefined);

                    return (
                        <tr key={playDate.id}>
                            <td>{playDate.displayDate}</td>
                            <td>
                                <div className="attendance-options">
                                    <button
                                        className={selectedAttendance === "yes" ? "attendance-selected" : "attendance-inactive"}
                                        type="button"
                                        onClick={() => handleAttendanceChange(playDate, "yes")}
                                    >
                                        Ja
                                    </button>
                                    <button
                                        className={selectedAttendance === "no" ? "attendance-selected" : "attendance-inactive"}
                                        type="button"
                                        onClick={() => handleAttendanceChange(playDate, "no")}
                                    >
                                        Nee
                                    </button>
                                </div>
                            </td>
                            <td>{totalAttendance}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </PageLayout>
    );
}

export default PlayDates;
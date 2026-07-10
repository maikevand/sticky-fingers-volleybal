import "./PlayDates.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {addDays, format} from "date-fns";
import {nl} from "date-fns/locale";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const projectId = import.meta.env.VITE_NOVI_PROJECT_ID;

function PlayDates() {
    const [attendance, setAttendance] = useState({});
    const [playDateAttendances, setPlayDateAttendances] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const today = new Date();
    const currentDay = today.getDay();

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
        const previousChoice = attendance[playDate.id];

        setAttendance({
            ...attendance,
            [playDate.id]: value,
        });

        const matchingAttendance = playDateAttendances.find((attendance) => {
            return attendance.date === playDate.date;
        });

        let updatedTotalAttendance;

        if (value === "yes" && matchingAttendance && previousChoice !== "yes") {
            updatedTotalAttendance = matchingAttendance.totalAttendance + 1;

        } else if (value === "no" && matchingAttendance && previousChoice === "yes") {
            updatedTotalAttendance = matchingAttendance.totalAttendance - 1;
        }

        if (updatedTotalAttendance !== undefined) {
            try {
                await axios.patch(
                    `${baseUrl}/playDateAttendances/${matchingAttendance.id}`,
                    {totalAttendance: updatedTotalAttendance,},
                    {
                        headers: {
                            "novi-education-project-id": projectId,
                        },
                    }
                );

                await fetchPlayDateAttendances();
            } catch (error) {
                console.error(error);
            }
        }

        if (!matchingAttendance && value === "yes") {
            try {
                await axios.post(
                    `${baseUrl}/playDateAttendances`,
                    {
                        date: playDate.date,
                        totalAttendance: 1
                    },
                    {
                        headers: {
                            "novi-education-project-id": projectId,
                        },
                    }
                );

                await fetchPlayDateAttendances();
            } catch (error) {
                console.error(error);
            }
        }
    }

    async function fetchPlayDateAttendances(signal) {
        setIsLoading(true);
        setErrorMessage("");

        try {
            const response = await axios.get(`${baseUrl}/playDateAttendances`, {
                signal: signal,
                headers: {
                    "novi-education-project-id": projectId,
                },
            });

            setPlayDateAttendances(response.data);
        } catch (error) {
            console.error(error);
            setErrorMessage("De totalen konden niet worden opgehaald.");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const controller = new AbortController();

        void fetchPlayDateAttendances(controller.signal);

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
                    const matchingAttendance = playDateAttendances.find((attendance) => {
                        return attendance.date === playDate.date;
                    });

                    return (
                        <tr key={playDate.id}>
                            <td>{playDate.displayDate}</td>
                            <td>
                                <div className="attendance-options">
                                    <button
                                        className={attendance[playDate.id] === "yes" ? "attendance-selected" : "attendance-inactive"}
                                        type="button"
                                        onClick={() => handleAttendanceChange(playDate, "yes")}
                                    >
                                        Ja
                                    </button>
                                    <button
                                        className={attendance[playDate.id] === "no" ? "attendance-selected" : "attendance-inactive"}
                                        type="button"
                                        onClick={() => handleAttendanceChange(playDate, "no")}
                                    >
                                        Nee
                                    </button>
                                </div>
                            </td>
                            <td>{matchingAttendance ? matchingAttendance.totalAttendance : 0}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </PageLayout>
    );
}

export default PlayDates;
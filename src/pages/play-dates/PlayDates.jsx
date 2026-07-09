import "./PlayDates.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import {useState} from "react";

function PlayDates() {
    const [attendance, setAttendance] = useState({});
    const today = new Date();
    const currentDay = today.getDay();
    const [totalAttendance, setTotalAttendance] = useState({
        1: 0,
        2: 0,
        3: 0,
    });

    let daysUntilFriday;

    if (currentDay <= 5) {
        daysUntilFriday = 5 - currentDay;
    } else {
        daysUntilFriday = 7 - currentDay + 5;
    }

    const nextFriday = new Date(today);
    nextFriday.setDate(today.getDate() + daysUntilFriday);

    const playDates = [0, 7, 14].map((daysToAdd, index) => {
        const date = new Date(nextFriday);
        date.setDate(nextFriday.getDate() + daysToAdd);

        return {
            id: index + 1,
            date: date.toLocaleDateString("nl-NL", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            }),
            total: 0,
        };
    });

    function handleAttendanceChange(playDateId, value) {
        const previousChoice = attendance[playDateId];

        setAttendance({
            ...attendance,
            [playDateId]: value,
        });

        if (previousChoice !== "yes" && value === "yes") {
            setTotalAttendance({
                ...totalAttendance,
                [playDateId]: totalAttendance[playDateId] + 1,
            });
        }

        if (previousChoice === "yes" && value === "no") {
            setTotalAttendance({
                ...totalAttendance,
                [playDateId]: totalAttendance[playDateId] - 1,
            });
        }
    }

return (
    <PageLayout className="play-dates-page">
        <h1>Speeldata</h1>
        <p>📍 Gymzaal Eekbrouwersweg 2</p>
        <p>🕗 20:00-21:30</p>
        <table className="play-dates-table">
            <thead>
            <tr>
                <th>Datum</th>
                <th>Aanwezig?</th>
                <th>Totaal</th>
            </tr>
            </thead>
            <tbody>
            {playDates.map((playDate) => (
                <tr key={playDate.id}>
                    <td>{playDate.date}</td>
                    <td>
                        <div className="attendance-options">
                            <button
                                className={attendance[playDate.id] === "yes" ? "attendance-selected" : "attendance-inactive"}
                                type="button"
                                onClick={() => handleAttendanceChange(playDate.id, "yes")}
                            >
                                Ja
                            </button>
                            <button
                                className={attendance[playDate.id] === "no" ? "attendance-selected" : "attendance-inactive"}
                                type="button"
                                onClick={() => handleAttendanceChange(playDate.id, "no")}
                            >
                                Nee
                            </button>
                        </div>
                    </td>
                    <td>{totalAttendance[playDate.id]}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </PageLayout>
);
}

export default PlayDates;
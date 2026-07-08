import "./PlayDates.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import {useState} from "react";

const playDates = [
    {
        id: 1,
        date: "10-07-2026",
        total: 5,
    },
    {
        id: 2,
        date: "17-07-2026",
        total: 3,
    },
    {
        id: 3,
        date: "24-07-2026",
        total: 0,
    },
    {
        id: 4,
        date: "31-07-2026",
        total: 4,
    },
];

function PlayDates() {
    const [attendance, setAttendance] = useState({});

    function handleAttendanceChange(playDateId, value) {
        setAttendance({
            ...attendance,
            [playDateId]: value,
            });
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
                                <button
                                    className={attendance[playDate.id] === "maybe" ? "attendance-selected" : "attendance-inactive"}
                                    type="button"
                                    onClick={() => handleAttendanceChange(playDate.id, "maybe")}
                                >
                                    ?
                                </button>
                            </div>
                        </td>
                        <td>{playDate.total}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </PageLayout>
    );
}

export default PlayDates;
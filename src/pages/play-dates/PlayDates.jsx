import "./PlayDates.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";

function PlayDates() {
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
                <tr>
                    <td>10-07-'26</td>
                    <td>
                        <div className="attendance-options">
                        <button className="attendance-selected" type="button">Ja</button>
                        <button className="attendance-inactive" type="button">Nee</button>
                        <button className="attendance-inactive" type="button">?</button>
                        </div>
                    </td>
                    <td>5</td>
                </tr>
                </tbody>
            </table>

        </PageLayout>
    );
}

export default PlayDates;
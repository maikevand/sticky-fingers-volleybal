import "./Polls.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import Button from "../../components/button/Button.jsx";

function Polls() {
    return (
        <PageLayout className="polls-page">
            <div className="polls-title-section">
                <h1>Peilingen</h1>
                <Button
                    type="button"
                    text="Nieuwe peiling"
                />
            </div>
        </PageLayout>
    )
}

export default Polls;
import "./NotFound.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <PageLayout className="not-found-page">
            <h1>Deze pagina bestaat niet</h1>
            <p>Oeps, er ging iets mis...</p>
            <p>Klik <Link className="not-found-link" to="/">hier</Link> om terug te keren naar de startpagina.</p>
        </PageLayout>
    );
}

export default NotFound;
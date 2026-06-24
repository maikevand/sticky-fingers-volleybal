import "./About.css"
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import {Link} from "react-router-dom";

function About() {
    return (
        <PageLayout className="about-page">
            <h1>Over ons</h1>
            <p>V.C. Sticky Fingers is een recreatieve volleybalclub in ‘s-Hertogenbosch. De club werd opgericht in
                1980 en
                bestaat uit een gemixt gezelschap van leden met verschillende leeftijden en volleybalervaring.</p>
            <p>Bij Sticky Fingers draait het om sportief én gezellig recreatief volleyballen. Of je nu al jaren
                speelt of
                gewoon plezier hebt in het spel: iedereen draagt bij aan de ontspannen en positieve sfeer van de
                club.</p>
            <p>We spelen op vrijdagavond van 20:00 tot 21:30 in gymzaal Eekbrouwersweg 2, 5233 VG
                ‘s-Hertogenbosch.</p>
            <Link to="/contact" className="button">
                Neem contact op
            </Link>
        </PageLayout>
    )
}

export default About;
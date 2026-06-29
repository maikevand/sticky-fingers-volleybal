import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navigation from "./components/navigation/Navigation.jsx";
import Home from './pages/home/Home.jsx';
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx"
import Members from "./pages/members/Members.jsx"
import PlayDates from "./pages/play-dates/PlayDates.jsx";
import Polls from "./pages/polls/Polls.jsx";

function App() {

    return (
        <div className="page-layout">
            <Navigation/>
            <main className="content-layout">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/over-ons" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/voor-leden" element={<Members/>} />
                    <Route path="/speeldata" element={<PlayDates/>} />
                    <Route path="/peilingen" element={<Polls/>} />
                    {/*<Route path="*" element={<NotFound/>} />*/}
                </Routes>
            </main>
        </div>
    )
}

export default App

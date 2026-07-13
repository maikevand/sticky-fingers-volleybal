import "./App.css";
import {Routes, Route, Navigate} from "react-router-dom";
import Navigation from "./components/navigation/Navigation.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx"
import Members from "./pages/members/Members.jsx"
import PlayDates from "./pages/play-dates/PlayDates.jsx";
import Polls from "./pages/polls/Polls.jsx";
import NewPoll from "./pages/new-poll/NewPoll.jsx";
import LogIn from "./pages/log-in/LogIn.jsx";
import Register from "./pages/register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext.jsx";

function App() {
    const {isAuth, status, user} = useContext(AuthContext);

    if (status === "pending") {
        return <p>Laden...</p>;
    }

    const isUser = isAuth && user?.roles?.includes("user");

    return (
        <div className="page-layout">
            <header>
                <Navigation/>
            </header>
            <main className="content-layout">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/over-ons" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/voor-leden" element={<Members isAuthenticated={isUser}/>}/>
                    <Route path="/speeldata"
                           element={isUser ? (<PlayDates/>) : (<Navigate to="/inloggen"/>)}/>
                    <Route path="/peilingen"
                           element={isUser ? (<Polls/>) : (<Navigate to="/inloggen"/>)}/>
                    <Route path="/nieuwe-peiling"
                           element={isUser ? (<NewPoll/>) : (<Navigate to="/inloggen"/>)}/>
                    <Route path="/inloggen"
                           element={isUser ? (<Navigate to="/profiel"/>) : (<LogIn/>)}/>
                    <Route path="/registreren" element={<Register/>}/>
                    <Route path="/profiel"
                           element={isUser ? (<Profile/>) : (<Navigate to="/"/>)}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </div>
    )
}

export default App

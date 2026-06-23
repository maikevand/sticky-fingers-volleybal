import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import About from "./pages/about/About.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

function App() {

    return (
        <div className="page-layout">
            <Navigation/>
            <main className="content-layout">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/over-ons" element={<About/>} />
                    {/*<Route path="*" element={<NotFound/>} />*/}
                </Routes>
            </main>
        </div>
    )
}

export default App

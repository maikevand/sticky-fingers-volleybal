import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Navigation from "./components/navigation/Navigation.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*<Route path="*" element={<NotFound/>} />*/}
                </Routes>
            </main>
        </>
    )
}

export default App

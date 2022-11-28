import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './components/home/HomePage';
import DataDetails from './components/home/Data/DataDetails';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/data/:projectId" element={<DataDetails/>}/>
                    <Route path="*" element={<main style={{padding: "1rem"}}><p>404 Nothing Found</p></main>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

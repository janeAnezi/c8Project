import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ReferralPage from './pages/ReferralPage';



function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/referral" Component={ReferralPage} />
                </Routes>
        </Router>
    );
}

export default App;

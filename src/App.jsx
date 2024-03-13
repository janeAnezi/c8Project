import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';

import MealPlanPage from './pages/MealPlanPage';
import MealPointsPage from './pages/MealPointsPage';
import MealHistoryPage from './pages/MealHistoryPage';
import Homepage from './pages/Homepage' ;
import ReferralPage from './pages/ReferralPage';
function App() {
    return (

        <Router>
            <Routes>
                <Route path="/referral" element={<MealPointsPage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/mealplan" element={<MealPlanPage />} />
                <Route path="/history" element={<MealHistoryPage />} />
                <Route path="/referral" Component={ReferralPage} />

            </Routes> 
        </Router> 
        

      
    );
}

export default App;



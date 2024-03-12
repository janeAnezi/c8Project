import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import MealPlanPage from './pages/MealPlanPage';
import MealPointsPage from './pages/MealPointsPage';
import MealHistoryPage from './pages/MealHistoryPage';

import ReferralPage from './pages/ReferralPage';




function App() {
    return (

        <Router>
            <Routes>
                <Route path="/referral" element={<MealPointsPage />} />
                <Route path="/mealplan" element={<MealPlanPage />} />
                <Route path="/history" element={<MealHistoryPage />} />
                                  <Route path="/referral" Component={ReferralPage} />

            </Routes> 
        </Router> 
        

      
    );
}

export default App;



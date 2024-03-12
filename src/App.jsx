import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';

import MealPlanPage from './pages/MealPlanPage';
import MealPointsPage from './pages/MealPointsPage';
import MealHistoryPage from './pages/MealHistoryPage';

// import ReferralPage from './pages/ReferralPage';
import MealPlanPoints from './Components/MealPlanPoints';




function App() {
    return (

        <Router>
            <Routes>
                <Route path="/MealPoint" element={<MealPointsPage />} />
                <Route path="/mealplan" element={<MealPlanPage />} />
                <Route path="/history" element={<MealHistoryPage />} />
                                  <Route path="/MealPoint" Component={MealPlanPoints} />

            </Routes> 
        </Router> 
        

      
    );
}

export default App;



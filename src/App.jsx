import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MealPlanPage from './pages/MealPlanPage';
import MealPointsPage from './pages/MealPointsPage';


function App() {
    return (
        
        <Router>
            <Routes>
                <Route path="/referral" element={<MealPointsPage />} />
                <Route path="/mealplan" element={<MealPlanPage />} />
            </Routes> 
        </Router> 
        
    );
}

export default App;



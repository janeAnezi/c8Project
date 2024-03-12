import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MealPlanPage from './pages/MealPlanPage';
import MealPointsPage from './pages/MealPointsPage';
import MealHistoryPage from './pages/MealHistoryPage';


function App() {
    return (
        
        <Router>
            <Routes>
                <Route path="/MealPoint" element={<MealPointsPage />} />
                <Route path="/mealplan" element={<MealPlanPage />} />
                <Route path="/history" element={<MealHistoryPage />} />
            </Routes> 
        </Router> 
        
    );
}

export default App;



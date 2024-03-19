import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import PrivateRoute from "./Contexts/PrivateRoute";
import MealPlanPage from "./pages/MealPlanPage";
import MealPointAndReferralPage from "./pages/MealPointAndReferralPage";
import MealHistoryPage from "./pages/MealHistoryPage";
import "./App.css";
import Onboarding from "./pages/Onboarding";
import PreviewPage from "./pages/Previewmeal";
import MealDetailsPage from "./pages/MealFullDetails";
import SignUp from "./pages/SignUp";
import RecommendedMeal from "./pages/RecommendedMeal";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="font-[Manrope]">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/referral" element={ <MealPointAndReferralPage />} />
           

            <Route
              path="/mealplan"
              element={
                <PrivateRoute>
                  <MealPlanPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/history"
              element={
                <PrivateRoute>
                  <MealHistoryPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/preview"
              element={
                <PrivateRoute>
                  <PreviewPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/MealDetails"
              element={
                <PrivateRoute>
                  <MealDetailsPage />
                </PrivateRoute>
              }
            />
            
            <Route path="/Recommended" element={<RecommendedMeal />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

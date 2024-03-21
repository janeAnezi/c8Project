import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import PrivateRoute from "./Contexts/PrivateRoute";
import MealPlanPage from "./pages/MealPlanPage";
import MealPointsPage from "./pages/MealPointsPage";
import MealHistoryPage from "./pages/MealHistoryPage";
import "./App.css";
import ReferralPage from "./pages/ReferralPage";
import Onboarding from "./pages/Onboarding";
import Preview from "./pages/Previewmeal";
import Mealdetails from "./pages/MealFullDetails";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/Homepage";
import RecommendedMeal from "./pages/RecommendedMeal";
import SignIn from "./pages/SignIn";
// import HomePage from "./pages/Homepage";
import CommunityPage from "./pages/CommunityPage";


function App() {
  return (
    <div className="font-[Manrope]">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/MealPoint" element={<MealPointsPage />}/>
            
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
              path="/preview/:id"
              element={
                <PrivateRoute>
                  <Preview />
                </PrivateRoute>
              }
            />
            <Route
              path="/MealDetails/:id"
              element={
                <PrivateRoute>
                  <Mealdetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/referral"
              element={
                <PrivateRoute>
                  <ReferralPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/communitypage"
              element={
                <PrivateRoute>
                  <CommunityPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/Recommended"
              element={
                <PrivateRoute>
                  <RecommendedMeal />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

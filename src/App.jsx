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
import RecommendedMeal from "./pages/RecommendedMeal";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import Navbar from "./Components/Navbar";
import Savedmeal from "./pages/Savedmeal";


function App() {
  return (
    <div className="font-[Manrope]">
      <Router>
        <Navbar />
        <AuthProvider>
           <Routes>
             
            <Route path="/" element={<Onboarding />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/MealPoint" element={<MealPointsPage />} />

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
              path="/mealDetails/:id"
              element={
                <PrivateRoute>
                  <Mealdetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/saved"
              element={
                <PrivateRoute>
                  <Savedmeal />
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
            <Route path="/Recommended" element={<RecommendedMeal />} />

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
              path="/Navbar"
              element={
                <PrivateRoute>
                 
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

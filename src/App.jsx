import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./(auth)/AuthLayout";
import SignInPage from "./(auth)/SignIn";
import SignUpPage from "./(auth)/SignUp";
import Dashboard from "./(main)/dashboard/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import LandingPage from "./components/LandingPage";
import MoreDetailsForm from "./MoreDetailsForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Routes (Shared Layout) */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />

        <Route path="/more-info" element={<MoreDetailsForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

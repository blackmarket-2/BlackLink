import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Features from "./components/Features";
import ProductShowCase from "./components/ProductShowCase";
import FAQs from "./components/FAQs";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import AuthLayout from "./(auth)/AuthLayout";
import SignInPage from "./(auth)/SignIn";
import SignUpPage from "./(auth)/SignUp";
import Dashboard from "./(main)/dashboard/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

const LandingPage = () => (
  <>
    <Banner />
    <NavBar />
    <Hero />
    <LogoTicker />
    <Features />
    <ProductShowCase />
    <FAQs />
    <CallToAction />
    <Footer />
  </>
);

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;

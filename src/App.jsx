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

import SignInPage from "./(auth)/SignIn";
import SignUpPage from "./(auth)/SignUp";
import Dashboard from "./(main)/dashboard/Dashboard";
import ChooseRole from "./(auth)/ChooseRole";
import DoctorVerification from "./(auth)/DoctorVerficiation";

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
        {/* Auth Pages — no layout or protection now */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        {/* Dashboard — directly accessible */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/choose-role" element={<ChooseRole />} /> {/* 🆕 */}
        <Route path="/verify-doctor" element={<DoctorVerification />} />{" "}
        {/* 🆕 */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

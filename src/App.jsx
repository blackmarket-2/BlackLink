import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Features from "./components/Features";
import ProductShowCase from "./components/ProductShowCase";
import FAQs from "./components/FAQs";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

=======
import { SignIn } from "@clerk/clerk-react";
import AuthLayout from "./(auth)/AuthLayout";
>>>>>>> e1ac13e4e424d986640b06d70770eafc7f7bacce
import SignInPage from "./(auth)/SignIn";

import SignUpPage from "./(auth)/SignUp";
import Dashboard from "./(main)/dashboard/Dashboard";
<<<<<<< HEAD
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
=======
import ProtectedRoutes from "./components/ProtectedRoutes";
import LandingPage from "./components/LandingPage";
import MoreDetailsForm from "./MoreDetailsForm";
>>>>>>> e1ac13e4e424d986640b06d70770eafc7f7bacce

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
        {/* Auth Pages — no layout or protection now */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        {/* Dashboard — directly accessible */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/choose-role" element={<ChooseRole />} /> {/* 🆕 */}
        <Route path="/verify-doctor" element={<DoctorVerification />} />{" "}
        {/* 🆕 */}
=======
        <Route
          path="/sign-in"
          element={<SignIn afterSignInUrl="/dashboard" redirectUrl="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />

        <Route path="/more-info" element={<MoreDetailsForm />} />
>>>>>>> e1ac13e4e424d986640b06d70770eafc7f7bacce
      </Routes>
    </BrowserRouter>
  );
};

export default App;

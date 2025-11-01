import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Features from "./components/Features";
import ProductShowCase from "./components/ProductShowCase";
import FAQs from "./components/FAQs";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import RoleSelect from "./(auth)/RoleSelect";
import DoctorDocsUpload from "./(auth)/DoctorDocsUpload";
import Dashboard from "./(main)/dashboard/Dashboard";
import DoctorDashboard from "./(main)/dashboard/DoctorDashboard";
import PatientDashboard from "./(main)/dashboard/PatientDashboard";

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
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/sign-in"
          element={<SignIn afterSignInUrl="/dashboard" redirectUrl="/dashboard" />}
        />
        <Route
          path="/sign-up"
          element={<SignUp afterSignUpUrl="/select-role" redirectUrl="/select-role" />}
        />
        <Route path="/select-role" element={<RoleSelect />} />
        <Route path="/upload-documents" element={<DoctorDocsUpload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
        <Route path="/dashboard/patient" element={<PatientDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

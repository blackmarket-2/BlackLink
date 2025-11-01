import React from "react";
import DoctorDashboard from "./DoctorDashboard";
import PatientDashboard from "./PatientDashboard";

const Dashboard = () => {
  const userType = localStorage.getItem("userType");
  const verified = localStorage.getItem("doctorVerified") === "true";

  if (userType === "doctor") {
    return <DoctorDashboard verified={verified} />;
  } else if (userType === "patient") {
    return <PatientDashboard />;
  } else {
    return <div>Please complete signup first.</div>;
  }
};

export default Dashboard;

<<<<<<< HEAD
import React from "react";
=======
import { useUser } from "@clerk/clerk-react";
>>>>>>> e1ac13e4e424d986640b06d70770eafc7f7bacce
import DoctorDashboard from "./DoctorDashboard";
import PatientDashboard from "./PatientDashboard";

const Dashboard = () => {
<<<<<<< HEAD
  const userType = localStorage.getItem("userType");
  const verified = localStorage.getItem("doctorVerified") === "true";

  if (userType === "doctor") {
    return <DoctorDashboard verified={verified} />;
  } else if (userType === "patient") {
    return <PatientDashboard />;
  } else {
    return <div>Please complete signup first.</div>;
  }
=======
  const { user } = useUser();
  const role = user?.publicMetadata?.role;

  if (role === "doctor") return <DoctorDashboard />;
  if (role === "patient") return <PatientDashboard />;

  return <div>Please select your role first.</div>;
>>>>>>> e1ac13e4e424d986640b06d70770eafc7f7bacce
};

export default Dashboard;

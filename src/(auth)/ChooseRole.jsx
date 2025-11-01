import React from "react";
import { useNavigate } from "react-router-dom";

const ChooseRole = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    localStorage.setItem("userType", role);

    if (role === "doctor") {
      navigate("/verify-doctor");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="role-container">
      <h2>Choose Your Role</h2>
      <p>Please select whether you are a doctor or a patient.</p>
      <div className="role-buttons">
        <button onClick={() => handleRoleSelect("doctor")}>I’m a Doctor</button>
        <button onClick={() => handleRoleSelect("patient")}>I’m a Patient</button>
      </div>
    </div>
  );
};

export default ChooseRole;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorVerification = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("doctorVerified", "false");
    navigate("/dashboard");
  };

  return (
    <div className="verify-container">
      <h2>Doctor Verification</h2>
      <p>Upload your degree or license for verification.</p>

      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DoctorVerification;

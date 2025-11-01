import React from "react";

const DoctorDashboard = ({ verified }) => {
  return (
    <div>
      <h1>Doctor Dashboard</h1>

      {!verified ? (
        <div className="alert">
          <p>Your account is pending verification.</p>
          <p>You currently have limited access.</p>
        </div>
      ) : (
        <div>
          <p>Your documents are verified. Full access granted!</p>
        </div>
      )}

      <div className="features">
        <ul>
          <li>View Appointments</li>
          {verified && <li>Prescribe Medication</li>}
          {verified && <li>Access Patient History</li>}
        </ul>
      </div>
    </div>
  );
};

export default DoctorDashboard;

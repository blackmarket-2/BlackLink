import React from "react";

const DoctorDashboard = ({ verified }) => {
  return (
<<<<<<< HEAD
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
=======
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Doctor Dashboard</h1>

      {!verified ? (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
          <p>Your account is pending verification. Limited features are enabled.</p>
        </div>
      ) : (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
          <p>Your account is verified! You now have full access.</p>
        </div>
      )}

      <ul className="list-disc pl-6">
        <li>View Appointments</li>
        {verified && <li>Prescribe Medication</li>}
        {verified && <li>View Patient History</li>}
      </ul>
>>>>>>> e1ac13e4e424d986640b06d70770eafc7f7bacce
    </div>
  );
};

export default DoctorDashboard;

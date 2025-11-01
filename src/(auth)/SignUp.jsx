<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup success
    navigate("/choose-role");
  };
=======
import { SignUp } from "@clerk/clerk-react";
>>>>>>> e1ac13e4e424d986640b06d70770eafc7f7bacce

  return (
<<<<<<< HEAD
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
=======
    <div className="flex justify-center items-center h-screen">
      <SignUp
        path="/sign-up"
        signInUrl="/sign-in"
        afterSignUpUrl="/select-role"
        redirectUrl="/select-role"
      />
>>>>>>> e1ac13e4e424d986640b06d70770eafc7f7bacce
    </div>
  );
};

export default SignUp;

import { SignUp } from "@clerk/clerk-react";
import React from "react";

const SignUpPage = () => {
  return (
    <SignUp
      signUpForceRedirectUrl="/welcome"
      signUpFallbackRedirectUrl="/welcome"
    />
  );
};

export default SignUpPage;

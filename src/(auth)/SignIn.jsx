import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <SignIn
      signInForceRedirectUrl="/dashboard"
      signInFallbackRedirectUrl="/dashboard"
    />
  );
};

export default SignInPage;

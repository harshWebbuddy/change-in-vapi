// src/components/SignUpPage.tsx
import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const SignUpPage = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-4">
        <SignUp routing="path" path="/sign-up" />
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-teal-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

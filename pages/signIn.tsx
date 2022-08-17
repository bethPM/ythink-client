import React from "react";
import SignInPageTemplate from "../components/Templates/SignInPageTemplate/SignInPageTemplate";
import WithAuth from "../hoc";

const SignInPage = () => {
  return <SignInPageTemplate />;
};

export default WithAuth(SignInPage, false);

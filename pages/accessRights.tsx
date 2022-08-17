import React from "react";
import AccessRightsPageTemplate from "../components/Templates/AccessRightsPageTemplate/AccessRightsPageTemplate";
import WithAuth from "../hoc";

const AccessRightsPage = () => {
  return <AccessRightsPageTemplate />;
};

export default WithAuth(AccessRightsPage, true);

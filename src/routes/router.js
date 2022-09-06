import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import FormView from "../views/form_view";
import FourZeroFour from "../views/four_zero_four";
import LoginView from "../views/login_view";

const MainRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/form" element={<FormView />} />
        <Route path="/*" element={<FourZeroFour />} />
      </Routes>
    </Fragment>
  );
};

export default MainRouter;

import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import FeedView from "../views/feed_view";
import FormView from "../views/form_view";
import FourZeroFour from "../views/four_zero_four";
import LoginView from "../views/login_view";
import ProfileView from "../views/profile_view";

const MainRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/feed" element={<FeedView />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/form" element={<FormView />} />
        <Route path="/*" element={<FourZeroFour />} />
      </Routes>
    </Fragment>
  );
};

export default MainRouter;

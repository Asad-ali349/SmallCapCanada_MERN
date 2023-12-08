import React, { Fragment } from 'react';
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Loader from "../Layout/Loader";


import Signin from "../Auth/Signin";

import AppLayout from '../Layout/Layout';
import UsersProfileContain from '../Components/UsersProfile';
import Dashboard from '../Components/Dashboard';
import Password from '../Components/Password';
import TermOfUse from '../Components/TermsOfUse/Add';
import Trade from '../Components/Trade';
import PrivacyPolicy from '../Components/PrivacyPolicy';
import Disclaimer from '../Components/disclaimer';
import TodaysPick from '../Components/TodaysPick';
import EditProfile from '../Components/UsersProfile/EditProfile/index.jsx';

// setup fake backend

const Routers = () => {


  return (
    <BrowserRouter basename={"/"}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route  path={'/'} element={<Signin />} />
          <Fragment >
            <Route element={<AppLayout />} >
              <Route  path={'/dashboard'} element={<Dashboard />} />
              <Route  path={'/todays_pick'} element={<TodaysPick />} />
              <Route  path={'/terms_of_use'} element={<TermOfUse />} />
              <Route  path={'/how_to_trade'} element={<Trade />} />
              <Route  path={'/privacy_policy'} element={<PrivacyPolicy />} />
              <Route  path={'/disclaimer'} element={<Disclaimer />} />
              <Route  path={'/profile'} element={<UsersProfileContain />} />
              <Route  path={'/edit_profile'} element={<EditProfile />} />
              <Route  path={'/password'} element={<Password />} />
            </Route>
          </Fragment>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;

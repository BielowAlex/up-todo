import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { RequireAuth } from "../utils";
import {
  AuthPageAsync,
  HomePageAsync,
  LoginEmailPageAsync,
  PrivacyPolicyPageAsync,
  RegisterEmailPageAsync,
} from "../pages";

const App: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/auth">
          <Route index element={<AuthPageAsync />} />
          <Route path="email">
            <Route index element={<LoginEmailPageAsync />} />
            <Route path="sign-up" element={<RegisterEmailPageAsync />} />
          </Route>
        </Route>
        <Route path="/privacy-policy" element={<PrivacyPolicyPageAsync />} />
        <Route element={<RequireAuth />}>
          <Route element={<MainLayout />}>
            <Route index element={<HomePageAsync />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export { App };

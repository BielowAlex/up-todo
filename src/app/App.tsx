import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { RequireAuth } from "../utils";
import {
  AuthPageAsync,
  HomePageAsync,
  LoginEmailPageAsync,
  RegisterEmailPageAsync,
  SettingsPageAsync,
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
        <Route element={<RequireAuth />}>
          <Route element={<MainLayout />}>
            <Route index element={<HomePageAsync />} />
            <Route path="/settings" element={<SettingsPageAsync />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export { App };

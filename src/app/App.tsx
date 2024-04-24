import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { RequireAuth } from "../utils";
import {
  AboutUsPageAsync,
  AuthPageAsync,
  ErrorPageAsync,
  HomePageAsync,
  LoginEmailPageAsync,
  NotFoundPageAsync,
  RegisterEmailPageAsync,
  SettingsPageAsync,
} from "../pages";
import { ErrorBoundary } from "react-error-boundary";
import { Loader } from "../components";

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary FallbackComponent={ErrorPageAsync}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/auth">
              <Route index element={<AuthPageAsync />} />
              <Route path="email">
                <Route index element={<LoginEmailPageAsync />} />
                <Route path="sign-up" element={<RegisterEmailPageAsync />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPageAsync />} />
            <Route path="/about-us" element={<AboutUsPageAsync />} />
            <Route element={<RequireAuth />}>
              <Route index element={<HomePageAsync />} />
              <Route path="/settings" element={<SettingsPageAsync />} />
            </Route>
          </Route>
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export { App };

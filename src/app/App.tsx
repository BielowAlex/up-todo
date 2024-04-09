import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { RequireAuth } from "../utils";
import { AuthPageAsync, HomePageAsync, LoginEmailPageAsync } from "../pages";

const App: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/auth">
          <Route index element={<AuthPageAsync />} />
          <Route path="email" element={<LoginEmailPageAsync />} />
        </Route>
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

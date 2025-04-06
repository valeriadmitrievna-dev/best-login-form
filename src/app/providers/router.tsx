import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "@/pages/login";
import { PolicyPage } from "@/pages/policy";
import { RegisterPage } from "@/pages/register";
import { SuccessPage } from "@/pages/success";
import { TermsPage } from "@/pages/terms";

export const AppRouter = () => {
  return (
    <BrowserRouter basename='/best-login-form/'>
      <Routes>
        <Route element={<Navigate replace to="/login" />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<TermsPage />} path="/terms" />
        <Route element={<PolicyPage />} path="/policy" />
        <Route element={<SuccessPage />} path="/success" />
      </Routes>
    </BrowserRouter>
  );
};

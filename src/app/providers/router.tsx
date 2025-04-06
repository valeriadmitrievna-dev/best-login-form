import { BrowserRouter, Navigate,Route, Routes } from "react-router-dom";

import { LoginPage } from "@/pages/login";
import { PolicyPage } from "@/pages/policy";
import { RegisterPage } from "@/pages/register";
import { SuccessPage } from "@/pages/success";
import { TermsPage } from "@/pages/terms";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/terms' element={<TermsPage />} />
        <Route path='/policy' element={<PolicyPage />} />
        <Route path='/success' element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
};

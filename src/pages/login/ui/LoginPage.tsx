import { Link } from "react-router-dom";

import { LoginForm } from "@/features/login-form";
import { AuthLayout } from "@/shared/ui/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout
      subtitle={
        <p>
          Don't have an account? <Link to="/register">Create an account.</Link>
        </p>
      }
      title="Login"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;

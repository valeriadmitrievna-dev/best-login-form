import { Link } from "react-router-dom";

import { RegisterForm } from "@/features/register-form";
import { AuthLayout } from "@/shared/ui/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout
      subtitle={
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      }
      title="Register"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;

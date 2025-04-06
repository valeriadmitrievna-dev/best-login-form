import { Link } from "react-router-dom";

import { RegisterForm } from "@/features/register-form";
import { AuthLayout } from "@/shared/ui/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Register"
      subtitle={
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      }
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;

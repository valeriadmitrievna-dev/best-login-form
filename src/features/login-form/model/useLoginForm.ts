import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useLoginMutate } from "../api";

const useLoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, errorMessage, clear: clearLogin } = useLoginMutate();

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      clearLogin();
    }

    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      clearLogin();
    }

    setPassword(event.target.value);
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearLogin();

    const { token } = await login({ email, password });

    if (token) {
      localStorage.setItem("test-login-form-token", token);
      navigate('/success', { replace: true });
    }
  };

  return {
    email,
    password,
    emailChangeHandler,
    passwordChangeHandler,
    submitHandler,
    errorMessage,
    isLoading,
  };
};

export default useLoginForm;

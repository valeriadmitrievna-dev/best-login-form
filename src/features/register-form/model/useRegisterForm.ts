import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useLoginMutate } from "../api";

import { FormFieldState } from "@/shared/types";

const useLoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<FormFieldState>({ value: "" });
  const [password, setPassword] = useState<FormFieldState>({ value: "" });

  const {
    register,
    isLoading,
    errorMessage,
    clear: clearRegister,
  } = useLoginMutate();

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      clearRegister();
    }

    setEmail({ value: event.target.value });
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      clearRegister();
    }

    setPassword({ value: event.target.value });
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    clearRegister();
    setEmail(state => ({ ...state, error: null }));
    setPassword(state => ({ ...state, error: null }));

    let errorsCounter = 0;

    if (!email.value) {
      errorsCounter += 1;
      setEmail((state) => ({ ...state, error: "Enter email" }));
    } else if (!email.value.match(/^[a-zA-Z0–9. _%+-]+@[a-zA-Z0–9. -]+\.[a-zA-Z]{2,}$/)) {
      errorsCounter += 1;
      setEmail((state) => ({ ...state, error: "Invalid email" }));
    }

    if (password.value.length < 6) {
      errorsCounter += 1;
      setPassword((state) => ({ ...state, error: "Enter at least 6 symbols" }));
    }

    if (!errorsCounter) {
      const { token } = await register({
        email: email.value,
        password: password.value,
      });

      if (token) {
        localStorage.setItem("test-login-form-token", token);
        navigate('/success', { replace: true });
      }
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

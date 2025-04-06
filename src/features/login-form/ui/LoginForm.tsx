import { useLoginForm } from "../model";
import styles from "./LoginForm.module.scss";

import PasswordIcon from "@/shared/icons/key.svg?react";
import EmailIcon from "@/shared/icons/mail.svg?react";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/TextField";

const LoginForm = () => {
  const {
    email,
    password,
    emailChangeHandler,
    passwordChangeHandler,
    submitHandler,
    errorMessage,
    isLoading,
  } = useLoginForm();

  return (
    <form noValidate autoComplete="on" className={styles.loginForm} onSubmit={submitHandler}>
      <TextField
        autoFocus
        autoComplete="username"
        icon={EmailIcon}
        id="email"
        label="Email Address"
        name="email"
        type="email"
        value={email}
        onChange={emailChangeHandler}
      />
      <TextField
        autoComplete="current-password"
        icon={PasswordIcon}
        id="password"
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={passwordChangeHandler}
      />
      <Button
        className={styles.loginFormSubmitButton}
        disabled={!email || !password}
        loading={isLoading}
        type="submit"
      >
        Log In
      </Button>
      {errorMessage && <p className={styles.loginFormErrorMessage}>{errorMessage}</p>}
    </form>
  );
};

export default LoginForm;

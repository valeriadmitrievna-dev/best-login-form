import { useRegisterForm } from "../model";
import styles from "./RegisterForm.module.scss";

import PasswordIcon from "@/shared/icons/key.svg?react";
import EmailIcon from "@/shared/icons/mail.svg?react";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/TextField";

const RegisterForm = () => {
  const {
    email,
    password,
    emailChangeHandler,
    passwordChangeHandler,
    submitHandler,
    errorMessage,
    isLoading,
  } = useRegisterForm();

  return (
    <form noValidate autoComplete="off" className={styles.loginForm} onSubmit={submitHandler}>
      <TextField
        autoFocus
        autoComplete="off"
        errorMessage={email.error}
        icon={EmailIcon}
        id="email"
        label="Email Address"
        name="email"
        type="email"
        value={email.value}
        onChange={emailChangeHandler}
      />
      <TextField
        autoComplete="new-password"
        errorMessage={password.error}
        icon={PasswordIcon}
        id="password"
        label="Password"
        name="new-password"
        type="password"
        value={password.value}
        onChange={passwordChangeHandler}
      />
      <Button
        className={styles.loginFormSubmitButton}
        disabled={!email.value || !password.value}
        loading={isLoading}
        type="submit"
      >
        Register
      </Button>
      {errorMessage && <p className={styles.loginFormErrorMessage}>{errorMessage}</p>}
    </form>
  );
};

export default RegisterForm;

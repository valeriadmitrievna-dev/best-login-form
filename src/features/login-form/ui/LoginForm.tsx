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
    <form
      onSubmit={submitHandler}
      className={styles.loginForm}
      noValidate
      autoComplete='on'
    >
      <TextField
        id='email'
        label='Email Address'
        type='email'
        value={email}
        onChange={emailChangeHandler}
        icon={EmailIcon}
        name='email'
        autoComplete='username'
        autoFocus
      />
      <TextField
        id='password'
        label='Password'
        name='password'
        autoComplete='current-password'
        type='password'
        value={password}
        onChange={passwordChangeHandler}
        icon={PasswordIcon}
      />
      <Button
        disabled={!email || !password}
        className={styles.loginFormSubmitButton}
        loading={isLoading}
        type='submit'
      >
        Log In
      </Button>
      {errorMessage && (
        <p className={styles.loginFormErrorMessage}>{errorMessage}</p>
      )}
    </form>
  );
};

export default LoginForm;

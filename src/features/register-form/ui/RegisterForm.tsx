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
    <form
      onSubmit={submitHandler}
      className={styles.loginForm}
      autoComplete='off'
      noValidate
    >
      <TextField
        id='email'
        label='Email Address'
        type='email'
        name='email'
        autoComplete='off'
        value={email.value}
        errorMessage={email.error}
        onChange={emailChangeHandler}
        icon={EmailIcon}
        autoFocus
      />
      <TextField
        id='password'
        label='Password'
        name='new-password'
        autoComplete='new-password'
        type='password'
        value={password.value}
        errorMessage={password.error}
        onChange={passwordChangeHandler}
        icon={PasswordIcon}
      />
      <Button
        disabled={!email.value || !password.value}
        className={styles.loginFormSubmitButton}
        loading={isLoading}
        type='submit'
      >
        Register
      </Button>
      {errorMessage && (
        <p className={styles.loginFormErrorMessage}>{errorMessage}</p>
      )}
    </form>
  );
};

export default RegisterForm;

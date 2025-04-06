import { FC, InputHTMLAttributes, SVGProps, useCallback, useMemo } from "react";
import cn from "classnames";

import styles from "./TextField.module.scss";

import EyeIcon from "@/shared/icons/eye.svg?react";
import EyeOffIcon from "@/shared/icons/eye-off.svg?react";
import { useOpenedStateControl } from "@/shared/lib/hooks";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string | null;
  icon?: FC<SVGProps<SVGSVGElement>>;
}

const TextField: FC<TextFieldProps> = ({
  label,
  errorMessage,
  icon: Icon,
  type = "text",
  id,
  ...props
}) => {
  const { isOpened: isPasswordVisible, toggle: togglePasswordVisibility } = useOpenedStateControl();

  const PasswordToggleIcon = useMemo(
    () => (isPasswordVisible ? EyeIcon : EyeOffIcon),
    [isPasswordVisible],
  );

  const inputType = useMemo(() => {
    if (type === "password" && isPasswordVisible) {
      return "text";
    }
    return type;
  }, [type, isPasswordVisible]);

  const textFieldInputCN = cn(styles.textFieldInput, {
    [styles.error]: !!errorMessage,
    [styles.withIcon]: !!Icon,
    [styles.withPasswordToggle]: type === "password",
  });

  const handlePasswordToggle = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      togglePasswordVisibility();
    },
    [togglePasswordVisibility],
  );

  return (
    <div className={styles.textField}>
      {label && (
        <label htmlFor={id} aria-invalid={!!errorMessage} className={styles.textFieldLabel}>
          {label}
        </label>
      )}
      <div className={styles.textFieldInputContainer}>
        {Icon && <Icon className={styles.textFieldInputIcon} />}
        <input {...props} type={inputType} id={id} className={textFieldInputCN} />
        {type === "password" && (
          <button
            type="button"
            onClick={handlePasswordToggle}
            className={styles.textFieldInputPasswordToggle}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >
            <PasswordToggleIcon className={styles.textFieldInputPasswordToggleIcon} />
          </button>
        )}
      </div>
      {errorMessage && <p className={styles.textFieldErrorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default TextField;

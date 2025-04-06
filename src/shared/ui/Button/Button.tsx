import { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({ children, className, disabled, loading, ...props }) => {
  const buttonCN = cn(styles.button, { [styles.loading]: loading }, className);

  return (
    <button {...props} disabled={disabled || loading} className={buttonCN}>
      {children}
    </button>
  );
};

export default Button;

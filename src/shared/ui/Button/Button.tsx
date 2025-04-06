import { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: FC<ButtonProperties> = ({
  children,
  className,
  disabled,
  loading,
  ...properties
}) => {
  const buttonCN = cn(styles.button, { [styles.loading]: loading }, className);

  return (
    <button {...properties} className={buttonCN} disabled={disabled || loading}>
      {children}
    </button>
  );
};

export default Button;

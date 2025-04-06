import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { Logo } from '../Logo';
import styles from "./AuthLayout.module.scss";

interface AuthLayoutProps {
  title: string;
  children: ReactNode;
  subtitle?: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ title, children, subtitle }) => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authLayoutContainer}>
        <Logo className={styles.authLayoutLogo} />
        <h1 className={styles.authLayoutTitle}>{title}</h1>
        <div className={styles.authLayoutSubtitle}>{subtitle}</div>
        {children}
        <p className={styles.authLayoutCopyright}>
          Copyright © 2025 Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Atque, ipsum.
        </p>
        <div className={styles.authLayoutInfo}>
          <Link to='/terms' className={styles.authLayoutInfoLink}>Terms of Service</Link>
          <Link to='/policy' className={styles.authLayoutInfoLink}>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

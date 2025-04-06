import { FC } from 'react';
import cn from 'classnames'

import styles from "./Logo.module.scss";

import LogoIcon from "@/shared/icons/logo.svg?react";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  const logoCN = cn(styles.logo, className);

  return <LogoIcon className={logoCN} />;
};

export default Logo;

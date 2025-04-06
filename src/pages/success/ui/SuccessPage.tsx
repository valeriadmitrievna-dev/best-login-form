import { useNavigate } from "react-router-dom";

import styles from "./SuccessPage.module.scss";

import { Button } from "@/shared/ui/Button";
import { Logo } from "@/shared/ui/Logo";

const SuccessPage = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("");
    navigate("/login", { replace: true });
  };

  return (
    <div className={styles.successPage}>
      <div className={styles.successPageContent}>
        <Logo />
        <h1>🎉You did it!🎉</h1>
        <p>
          As a completely unbiased observer, I must say — adding me to your team
          is obviously the right move 😉
        </p>
        <Button onClick={logoutHandler}>Try again!</Button>
      </div>
    </div>
  );
};

export default SuccessPage;

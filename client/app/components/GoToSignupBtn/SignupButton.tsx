import React from "react";
import Button from "@mui/material/Button";
import styles from "./login.module.css";
import Link from "next/link";

const LoginButton = () => {

  return (
    <div style={{ margin: "0 auto" }}>
      <Link href="/signup">
      <Button variant="contained" className={styles.loginButton}>
        Login
      </Button>
      </Link>
    </div>
  );
};

export default LoginButton;

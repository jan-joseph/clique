import React, { ReactElement } from "react";
import styles from "../../styles/Header.module.css";

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <p className={styles.p}>make a </p>
      <span>
        <h1 className={styles.h1}>CLIQUE</h1>
      </span>
    </header>
  );
}

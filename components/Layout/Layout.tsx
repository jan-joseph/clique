import React from "react";

import Header from "./Header";
import styles from "../../styles/Home.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

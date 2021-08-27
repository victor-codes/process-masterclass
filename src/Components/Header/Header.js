import React from "react";
import { Logo } from "../../assets/icon/Logo";
import { Menu } from "../../assets/icon/Menu";
import { Search } from "../../assets/icon/Search";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className="flex">
          <Menu />
          <Search />
        </div>
        <Logo />
        <div className={styles.notification}>
          <span>3</span>
        </div>
      </nav>
    </header>
  );
}

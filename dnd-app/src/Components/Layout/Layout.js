import React from "react";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header>D&D 5E Character Builder</header>
      {children}
      <footer>Created by @lpdowling26</footer>
    </div>
  );
};

export default Layout;

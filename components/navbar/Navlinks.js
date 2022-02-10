import React from "react";
import { generateNavlink } from "./helper";
import styles from "../../styles/Navbar.module.scss";

const NavLinks = () => (
  <div className="lg:inline-flex ml-5 lg:flex-wrap">
    {generateNavlink(styles)}
  </div>
);

export default NavLinks;

import React, { useState } from "react";
import Link from "next/link";
import { useNavState } from "./hooks";
import styles from "../../styles/Navbar.module.scss";
import Profile from "./Profile";
import NavLinks from "./Navlinks";
import NavSearch from "./Search";
import { SvgSearch } from "../svg";

export const Navbar = () => {
  const [navState, setNavState] = useState(false);

  return (
    <>
      <nav className={`${styles.nav} flex`}>
        <div className={styles.nav__container}>
          <div>
            <Link href="/">
              <a className="inline-flex items-center md:p-2 pt-[8px] lg:pt-auto">
                <span className={`${styles.nav__brand} font-dm-sans`}>
                  PcariMovie
                </span>
              </a>
            </Link>
          </div>

          <div
            className={`${
              navState || "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:w-auto lg:items-center items-start flex flex-col lg:h-auto lg:pl-0 flex-grow justify-between">
              <NavLinks />
              <NavSearch />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Profile />
          </div>

          <button
            className="inline-flex p-3 rounded lg:hidden text-white absolute right-5 top-[25px]"
            onClick={() => useNavState(navState, setNavState)}
          >
            <SvgSearch />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../../assets/about/logo-w.png";
import { Divide as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <nav className={styles.navbar}>
        <img
          className={styles.logo}
          src={logo}
          alt="A square with letters A and N on the right side of the square"
          onClick={() => navigate("/")}
        />
        <div className={styles.menu}>
          <div className={styles.hamburger}>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={30}
              color="#fff"
            />
          </div>
          <ul
            className={`${styles.menuItems} ${isOpen && styles.menuOpen}`}
            onClick={() => setOpen(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

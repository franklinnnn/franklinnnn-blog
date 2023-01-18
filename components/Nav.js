import styles from "../styles/Nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  // /*===== MENU SHOW =====*/
  // const showMenu = (toggleId, navId) => {
  //   const toggle = document.getElementById(toggleId),
  //     nav = document.getElementById(navId);

  //   if (toggle && nav) {
  //     toggle.addEventListener("click", () => {
  //       nav.classList.toggle("show");
  //     });
  //   }
  // };
  // showMenu("nav-toggle", "nav-menu");

  // /*===== REMOVE MENU MOBILE =====*/
  // const navLink = document.querySelectorAll(".nav__link");

  // function linkAction() {
  //   const navMenu = document.getElementById("nav-menu");
  //   navMenu.classList.remove(`${styles.show}`);
  // }
  // navLink.forEach((n) => n.addEventListener("click", linkAction));

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.grid}`}>
        <div>
          <a href="#" className={styles.nav__logo}>
            FA
          </a>
        </div>

        <div className={styles.nav__menu} id="nav-menu">
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href="https://franklinnn.com/" className={styles.nav__link}>
                Home
              </a>
            </li>
            <li className={styles.nav__item}>
              <a
                href="https://franklinnn.com/#about"
                className={styles.nav__link}
              >
                About
              </a>
            </li>
            <li className={styles.nav__item}>
              <a
                href="https://franklinnn.com/#work"
                className={styles.nav__link}
              >
                Work
              </a>
            </li>
            <li className={styles.nav__item}>
              <a
                href="https://franklinnn.com/#contact"
                className={styles.nav__link}
              >
                Contact
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#" className={`${styles.nav__link} ${styles.active}`}>
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.nav__toggle} id="nav-toggle">
          <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
}

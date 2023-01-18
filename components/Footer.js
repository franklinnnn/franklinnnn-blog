import styles from "../styles/Footer.module.css";
import { GrLinkedinOption } from "react-icons/gr";
import {
  AiFillGithub,
  AiOutlineCodepen,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__data}>
          <a
            href="https://www.linkedin.com/in/franklin-assa/"
            class={styles.footer__social}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <GrLinkedinOption />
          </a>
          <a
            href="https://github.com/franklinnnn"
            class={styles.footer__social}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://codepen.io/franklinnnn/"
            class={styles.footer__social}
            target="_blank"
            rel="noreferrer"
            title="CodePen"
          >
            <AiOutlineCodepen />
          </a>
          <a
            href="https://twitter.com/franklin_assa"
            class={styles.footer__social}
            target="_blank"
            rel="noreferrer"
            title="Twitter"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.instagram.com/boykunnn/"
            class={styles.footer__social}
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <AiOutlineInstagram />
          </a>
          <p class="footer__text">{year} · Franklin Assa</p>
        </div>
      </div>
    </footer>
  );
}

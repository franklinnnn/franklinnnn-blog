import styles from "../styles/Footer.module.css";
import { GrLinkedinOption } from "react-icons/gr";
import {
  AiFillGithub,
  AiOutlineCodepen,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__data}>
          <a
            href="https://www.linkedin.com/in/franklin-assa/"
            class={styles.footer__social}
            target="_blank"
            title="LinkedIn"
          >
            <GrLinkedinOption />
          </a>
          <a
            href="https://github.com/franklinnnn"
            class={styles.footer__social}
            target="_blank"
            title="GitHub"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://codepen.io/franklinnnn/"
            class={styles.footer__social}
            target="_blank"
            title="CodePen"
          >
            <AiOutlineCodepen />
          </a>
          <a
            href="https://twitter.com/franklin_assa"
            class={styles.footer__social}
            target="_blank"
            title="Twitter"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.instagram.com/boykunnn/"
            class={styles.footer__social}
            target="_blank"
            title="Instagram"
          >
            <AiOutlineInstagram />
          </a>
          <p class="footer__text">© 2022 · Franklin Assa</p>
        </div>
      </div>
    </footer>
  );
}

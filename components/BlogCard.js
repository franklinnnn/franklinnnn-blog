import Link from "next/link";
import styles from "../styles/BlogCard.module.css";
import { AiOutlineCalendar } from "react-icons/ai";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.imgContainer}>
          <img src={coverPhoto.url} alt="" />
        </div>

        <div className={styles.text}>
          <h2>{title}</h2>
          <h3>
            <AiOutlineCalendar />
            {datePublished}
          </h3>
        </div>
      </Link>
    </div>
  );
}

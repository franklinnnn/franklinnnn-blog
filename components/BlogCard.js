import Link from "next/link";
import styles from "../styles/BlogCard.module.css";
import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  datePublished,
  tags,
  slug,
  setFilter,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        {/* <Image src={coverPhoto.url} alt={title}/> */}
        <img src={coverPhoto.url} alt={title} />
      </div>

      <div className={styles.text}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <h4 onClick={() => setFilter(tag)}>#{tag}</h4>
          ))}
        </div>
        <Link href={`/posts/${slug}`}>
          <h2>{title}</h2>{" "}
        </Link>
        <h3>
          <AiOutlineCalendar />
          {datePublished}
        </h3>
      </div>
    </div>
  );
}

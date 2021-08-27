import React from "react";
import styles from "./NewsCard.module.css";
export default function NewsCard({ title, desc, tag, img }) {
  return (
    <article className={styles.newscard_container}>
      <img className={styles.image} src={img} alt="" />
      <h4 className={styles.heading}>{title}</h4>
      <p className={styles.paragraph}>{desc}</p>
      <div className={styles.posted_under_container}>
        <span>Posted under </span>
        <div className={styles.tag_container}>
          <span className={styles.tag}>{tag}</span>
        </div>
      </div>
    </article>
  );
}

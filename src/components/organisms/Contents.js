import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Contents.module.scss";

function Content() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className={styles.content}>
      <section className={styles.postList}>
        {posts.map((post) => (
          <article key={post.id} className={styles.postCard}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postContent}>{post.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Content;

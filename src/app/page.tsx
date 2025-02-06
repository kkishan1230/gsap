import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Homepage</h1>
      <p className={styles.description}>
        This is a simple homepage built with Next.js 15. You can customize this
        page by adding more content and styling it further.
      </p>
      <div className={styles.features}>
        <div className={styles.feature}>
          <h2>Feature 1</h2>
          <p>Short description of feature 1.</p>
        </div>
        <div className={styles.feature}>
          <h2>Feature 2</h2>
          <p>Short description of feature 2.</p>
        </div>
        <div className={styles.feature}>
          <h2>Feature 3</h2>
          <p>Short description of feature 3.</p>
        </div>
      </div>

      <img src="/next.svg" alt="Next.js Logo" className={styles.logo} />
    </div>
  );
}

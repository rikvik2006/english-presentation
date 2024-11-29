import styles from "../styles/notFound.module.scss";

export default function notFoundPage() {
    return (
        <div className={styles.container}>
            <div className={styles.errorContainer}>
                <h1>404</h1>
                <div>Page not found</div>
            </div>
            <img src="/img/404.jpg" alt="404 Not found" />
        </div>
    );
}

import Link from "next/link";
import styles from "./index.module.css";

const Index = ({article}) => {

    return (
        <div className={styles.item} key={article.id}>
            <Link href={`/blog/${article.id}`}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p>Date : {article.date}</p>
            </Link>
        </div>
    );
}

export default Index;

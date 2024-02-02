import PostItem from "@/components/UI/PostItem";
import styles from "./index.module.css";

const Index = ({ articles }) => {
    return (
        <div className={styles.grid}>
            {
                articles?.map(article => (
                    // on utilise le composant PostItem dans l'itération pour afficher chaque article
                    <PostItem key={article.id} article={article} />
                ))
            }
        </div>
    );
}

export default Index;

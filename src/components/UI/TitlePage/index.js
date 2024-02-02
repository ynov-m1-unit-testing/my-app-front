import styles from "./index.module.css";

const Index = ({title}) => {
    return (
        <div className={styles.wrapper}>
            <h2>{title}</h2>
        </div>
    );
}

export default Index;

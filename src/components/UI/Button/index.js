import styles from "./index.module.css";
const Index = ({handleClick, text}) => {
    return (
        <button className={styles.btn} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Index;

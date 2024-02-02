import styles from "./index.module.css";

const Index = ({children, onClose}) => {
    return (
        <>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.modal}>
                {children}
            </div>
        </>
    );
}

export default Index;

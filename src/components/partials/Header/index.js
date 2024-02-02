"use client";
import Link from "next/link";
import SearchInput from '@/components/UI/SearchInput';
import styles from "./index.module.css";

const Index = () => {
    return (
        <>
        <header className={styles.header__main}>
            <Link href="/">
                <h1 className={styles.logo}>My wonderfull app</h1>
            </Link>
            <div className={styles.right__part}>
                <SearchInput />
            </div>
            </header>
        </>
    );
}

export default Index;
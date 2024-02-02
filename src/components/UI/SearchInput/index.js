"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import articlesService from "@/services/articles.api.js";
import styles from "./index.module.css";

const Index = () => {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (search.length > 3) {
            articlesService.searchArticles(search)
                .then(res => {
                    setResults(res.results);
                })
                .catch(err => console.log(err))
        }
    }, [search]);

    return (
        <div className={styles.wrapper}>
            <input
                type="text"
                placeholder="Search"
                value={search}
                name="search"
                autoComplete="off"
                onChange={(e) => setSearch(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448" /></svg>
            {
                search.length > 3 && (
                    <div className={styles.results}>
                        {
                            results && results.length > 0 ? results.map((result) => {
                                return (
                                    <Link
                                        onClick={()=>setSearch('')}
                                        href={`/blog/${result.id}`} key={result.id}>
                                        <p>{result.title}</p>
                                    </Link>
                                )
                            }) : (
                                <p>No results</p>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Index;

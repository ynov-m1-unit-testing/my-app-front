"use client";
import {useEffect, useState} from "react";
import { useParams } from 'next/navigation';
import articlesService from "@/services/articles.api";
import TitleArticle from "@/components/article/TitleArticle";
import DescriptionArticle from "@/components/article/DescriptionArticle";
import DateArticle from "@/components/article/DateArticle";

const Page = () => {

    const params = useParams()
    const [article, setArticle] = useState(null);
    const [loading, isLoading] = useState(false);

    useEffect(() => { 
        isLoading(true);
        articlesService.getArticle(params.id).then(data => {
            setArticle(data.results);
        })
        .catch(err => console.log(err))
        .finally(() => isLoading(false));
    }, []);

    if (loading) return <div>Chargement...</div>;

    return (
        <div>
            <TitleArticle title={article?.title} />
            <DateArticle date={article?.date} />
            <DescriptionArticle description={article?.description} />
        </div>
    );
}

export default Page;
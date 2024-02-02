export default {
    // On créé une fonction qui va nous permettre de récupérer les articles sur l'API
    getArticles: async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/articles`,{ cache: 'force-cache' });
        const articles = await res.json();
        return articles;
    },
    searchArticles: async (string) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/articles/search?string=${string}`,{ cache: 'no-store' });
        const articles = await res.json();
        return articles;
    },
    getArticle: async (id) => { 
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/articles/${id}`,{ cache: 'force-cache' });
        const article = await res.json();
        return article;
    }
}

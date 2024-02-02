import TitlePage from "@/components/UI/TitlePage";
import GridPosts from "@/components/UI/GridPosts";

export default async function Home() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/articles`);
  const articles = await res.json();

  return (
    <div className="container">
      {/* on utilise le composant TitlePage */}
      <TitlePage title="Accueil" />
      {/* on utilise le composant GridPosts */}
      {
        articles && <GridPosts articles={articles.results} />
      }
    </div>
  )
}
import "./style.css";
import { MovieCard } from "../../components/MovieCard";
import { useGetMovies } from "../../hooks/useGetMovies";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const language = import.meta.env.VITE_LANGUAGE

export function Home() {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&${language}`;
    const { movies } = useGetMovies(topRatedUrl);

    return(
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>

            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p> }
                {movies.length > 0 && 
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </div>
    )
}
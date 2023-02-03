import "./style.css";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard";
import { useGetMovies } from "../../hooks/useGetMovies";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const language = import.meta.env.VITE_LANGUAGE

export function Search() {
    const [ searchParams ] = useSearchParams();

    const query = searchParams.get("q");
    const moviesUrl = `${searchURL}?${apiKey}&query=${query}&${language}`;
    const { movies, totalPages } = useGetMovies(moviesUrl);

    return(
        <div className="container">
            <h2 className="title">
                Resultado para: <span className="query-text">{query}</span>
            </h2>

            <div className="movies-container">
                {movies.length === 0 && totalPages !== 0 && <p>Carregando...</p> }
                {totalPages === 0 && <p>Filme não encontrado.</p> }
                {movies.length > 0 && 
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </div>
    )
}
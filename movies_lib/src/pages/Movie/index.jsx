import "./style.css";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { MovieCard } from "../../components/MovieCard";
import { useGetMovie } from "../../hooks/useGetMovie";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const language = import.meta.env.VITE_LANGUAGE

export function Movie() {
    const {id} = useParams();
    const movieUrl = `${moviesURL}${id}?${apiKey}&${language}`;
    const movie = useGetMovie(movieUrl);

    function formatCurrency(number) {
        return Number(number).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    return(
        <div className="movie-page">
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className="tagline">{movie.tagline}</p>

                    <div className="info">
                        <h3>
                            <BsWallet2 /> Orçamento:
                        </h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>

                    <div className="info">
                        <h3>
                            <BsGraphUp /> Faturamento:
                        </h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>

                    <div className="info">
                        <h3>
                            <BsHourglassSplit /> Duração:
                        </h3>
                        <p>{movie.runtime} minutos</p>
                    </div>

                    <div className="info description">
                        <h3>
                            <BsFillFileEarmarkTextFill /> Descrição:
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            ) }
        </div>
    )
}
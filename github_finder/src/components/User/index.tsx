import { UserProps } from "../../types/UserProps";
import { MdLocationPin } from "react-icons/md";
import * as C from "./styles";
import { Link } from "react-router-dom";

export function User({ avatar_url, login, location, followers, following }: UserProps) {
    return(
        <C.Container>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>

            {location && (
                <C.Location>
                    <MdLocationPin />
                    <span>{location}</span>
                </C.Location>
            )}

            <C.Stats>
                <div>
                    <p>Seguidores:</p>
                    <C.Number>{followers}</C.Number>
                </div>

                <div>
                    <p>Seguindo:</p>
                    <C.Number>{following}</C.Number>
                </div>
            </C.Stats>
            <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
        </C.Container>
    );
}
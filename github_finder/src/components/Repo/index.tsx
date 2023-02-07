import { RepoProps } from "../../types/RepoProps";
import { BsCodeSlash, BsStar } from "react-icons/bs"
import { GoRepoForked, GoRepo } from "react-icons/go";
import * as C from "./styles";
import { Link } from "react-router-dom";

export function Repo({ name, language, html_url, stargazers_count, forks_count }: RepoProps) {
    return(
        <C.Container>
            <h3>{name}</h3>
            <p>
                <BsCodeSlash />
                <span>{language}</span>
            </p>
            <C.Stats>
                <C.Stats_Container>
                    <div><BsStar /></div>
                    <span>{stargazers_count}</span>
                </C.Stats_Container>
                <C.Stats_Container>
                    <div><GoRepoForked /></div>
                    <span>{forks_count}</span>
                </C.Stats_Container>
            </C.Stats>
            <Link to={html_url} className="to-code">
                Ver código
                <GoRepo />
            </Link>
        </C.Container>
    );
}
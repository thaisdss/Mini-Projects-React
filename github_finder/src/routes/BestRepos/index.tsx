import * as C from "./styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import { RepoProps } from "../../types/RepoProps";
import { api } from "../../services/api";
import { Repo } from "../../components/Repo";
import { Loader } from "../../components/Loader";

export function BestRepos() {
    const { userName } = useParams();
    const [repos, setRepos] = useState<RepoProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    async function loadRepos(userName?: string) {
        if(!userName) return

        try{
            setIsLoading(true);
            const response = await api.get(`/${userName}/repos`);
            const data = response.data;

            const bestRepos = data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
            let listRepos = [];

            for(let i = 0; i < bestRepos.length; i++) {
                if(i < 5) {
                    const { name, language, html_url, stargazers_count, forks_count } = bestRepos[i];

                    listRepos.push({
                        name,
                        language,
                        html_url,
                        stargazers_count,
                        forks_count
                    })
                }
            }

            setRepos(listRepos);
            setIsLoading(false);
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadRepos(userName);
    }, [])

    return(
        <C.Container>
            <Link to="/" className="back">Voltar</Link>
            <h2>Explore os repositórios do usuário: {userName}</h2>
            <C.Repos_Container>
                { isLoading && <Loader isLoading={true} /> }
                { repos.length === 0 && !isLoading && <p>Esse usuário não possui nenhum repositório!</p> }
                { repos.length > 0 && repos.map(repo => (
                    <Repo { ...repo } />
                )) }
            </C.Repos_Container>
        </C.Container>
    );
}
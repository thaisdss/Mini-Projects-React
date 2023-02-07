import { Search } from "../../components/Search";
import { useState } from "react";
import * as C from "./styles";
import { UserProps } from "../../types/UserProps";
import { api } from "../../services/api";
import { User } from "../../components/User";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";

export function Home() {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function loadUser(userName: string) {
        try{
            setError(false);
            setUser(null);
            setIsLoading(true);
    
            const response = await api.get(`/${userName}`);
            const data = response.data;
    
            const { avatar_url, login, location, followers, following } = data;
    
            const userData: UserProps = {
                avatar_url,
                login,
                location,
                followers,
                following
            };
    
            setUser(userData);
            setIsLoading(false);
        }
        catch(error) {
            console.log(error);
            setError(true);
        }
    }

    return(
        <C.Container>
            <Search  loadUser={loadUser} />
            {isLoading && !error && <Loader isLoading={true} /> }
            {user && <User {...user} /> }
            {error && <Error msg="Usuário não encontrado!" />}
        </C.Container>
    );
}
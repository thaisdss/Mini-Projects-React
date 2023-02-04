import { Link } from "react-router-dom";
import * as C from "./styles";

export function Navbar() {
    return(
        <C.Container>
            <h2> <Link to="/">Blog</Link> </h2>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/new" className="new-btn">Novo Post</Link> </li>
                <li> <Link to="/manage">Gerenciar</Link> </li>
            </ul>
        </C.Container>
    );
}
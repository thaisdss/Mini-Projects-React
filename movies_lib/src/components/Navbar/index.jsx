import "./style.css"
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

export function Navbar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if(!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return(
        <nav className="navbar">
            <h2>
            <Link to="/"> <BiCameraMovie /> MoviesLib</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Busque um filme"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                />
                <button type="submit"><BiSearchAlt2 /></button>
            </form>
        </nav>
    )
}
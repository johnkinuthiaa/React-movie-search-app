import {useEffect, useState} from "react";
import {MovieCard} from "./MovieCard";
import './index.css';

const API_URL ="http://www.omdbapi.com/?apikey=389ea027&s="

export const App =()=> {
    useEffect(() => {
        searchMovie("superman")
    }, [])
    const [movies, setMovie] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}${title}`)
        const data = await response.json()
        setMovie(await data.Search)

    }
    return (
        <div>
            <h1>Movie app</h1>
            <div className={"search"} >
                <input type={"search"}
                       placeholder={"Search for a movie"}
                       onChange={ (e)=>{
                           setSearchTerm(e.target.value)
                       }}
                />
                <button
                    className={"search-button"}
                    onClick={()=>{
                        searchMovie(searchTerm)
                    }}>
                    Search
                </button>
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
};


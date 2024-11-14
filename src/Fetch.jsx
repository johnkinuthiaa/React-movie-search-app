import {useEffect, useState} from "react";
import {MovieCard} from "./MovieCard";

const Data = ()=> {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const BASE_URL = "http://www.omdbapi.com/?apikey=389ea027&s="

    useEffect(() => {
        searchMovies("superman")
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${BASE_URL}${title}`)
        if (!response.ok) {
            throw new Error("ERROR FETCHING DATA FROM API")
        }
        const data = await response.json()
        setMovies(data.Search)
    }
    return (
        <div>
            <h1>Movie app</h1>
            <div className={"search"}>
                <input type={"search"}
                       placeholder={"Search for a movie"}
                       onChange={(e) => {
                           setSearchValue(e.target.value)
                       }}
                />
                <button
                    className={"search-button"}
                    onClick={() => {
                        searchMovies(searchValue)
                    }}>
                    Search
                </button>
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default Data
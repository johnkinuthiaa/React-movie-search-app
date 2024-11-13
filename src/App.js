import {useState} from "react";
import {MovieCard} from "./MovieCard";

// const API_BASE_URL ="http://www.omdbapi.com/?apikey=389ea027&s=superman"
export default function App(){
    const [movieInfo,setMovieInfo] =useState([])
    const fetchData =( async ()=>{
        const response =await fetch("http://www.omdbapi.com/?apikey=389ea027&s=superman")
        const data =await response.json()
        setMovieInfo( await data.Search)
    })
    return(
        <div>
            <MovieCard Poster={"src"} Type={"movie"} Title={"this movie"} Year={2024}/>
            {/*{ movieInfo.map( (movie)=>{*/}
            {/*    <MovieCard props={movie}/>*/}
            {/*})}*/}
        </div>
    )
}

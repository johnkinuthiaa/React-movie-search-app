import React from "react";
export const MovieCard=( {movie:{Poster,Title,Type,Year}} )=>{
    return(
        <div>
            <img src={Poster} alt={Title}></img>
            <p>{Title}</p>
            <p>{Type}</p>
            <p>{Year}</p>
        </div>
    )

}
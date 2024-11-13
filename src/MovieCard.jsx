export const MovieCard=(props)=>{
    const{Poster,Type,Title,Year} =props
    return(
        <div>
            <img src={Poster} alt={Title}></img>
            <p>{Type}</p>
            <p>{Title}</p>
            <p>{Year}</p>
        </div>
    )

}
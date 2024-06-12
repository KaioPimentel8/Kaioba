import { useState } from "react";

function Filmes() {

    const[filmes, setFilmes] = useState([])
    
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch (error => console.log(error))

    return (  
        <>
        <h1>Filmes</h1>
        <div className="listafilmes flex flex-row">
        {
            filmes.map(
                filme => (
                    <div className="cardname" key={filme.id}>
                         <img src={`https://image.tmdb.org/t/p/w342/${filme.poster_path}`}></img>
                         <h1> {filme.title} </h1>
                    </div>
                   
                )
            )
        }
        </div>
        </>
    );
}

export default Filmes;
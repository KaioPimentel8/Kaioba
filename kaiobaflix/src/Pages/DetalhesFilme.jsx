import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalhesFilmes() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
      .then(response => response.json())
      .then(data => setFilme(data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div className="bg-white min-h-screen p-10 pt-24 dark:bg-black ">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-800">
          <img className="w-full" src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`} alt={filme.title} />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-black mb-2 dark:text-white">{filme.title}</h1>
            <p className="text-black mb-4 dark:text-white">{filme.overview}</p>
            <p className="text-black dark:text-white">Avaliação: {filme.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalhesFilmes;


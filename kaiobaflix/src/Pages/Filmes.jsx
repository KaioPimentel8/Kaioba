import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filmes() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR')
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="bg-white min-h-screen p-10 pt-24">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6">Filmes Populares</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filmes.map(filme => (
                        <div key={filme.id} className="bg-black rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img className="w-full h-72 object-cover" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt={filme.title} />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-white mb-2">{filme.title}</h3>
                                <Link to={`/filmes/${filme.id}`} className="text-red-600 hover:text-red- transition-colors duration-200">
                                    Saiba mais
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Filmes;
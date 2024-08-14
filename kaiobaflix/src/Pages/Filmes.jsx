import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Componentes/SearchBar/SearchBar.jsx";

function Filmes() {
    const [filmes, setFilmes] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = e => {
        const searchTerm = e.target.value
        setFilmes(searchTerm)

        const filtered = searchResults.filter((filme) =>
            filme.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        console.log(filtered);

        setSearchResults(filtered);
    }
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR')
            .then(response => response.json())
            .then(response => setSearchResults(response.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="bg-white min-h-screen p-10 pt-24">
            <div className="flex justify-center mb-10">
            <form className= " flex items-center ">
            <input
                type="text"
                placeholder="Buscar filmes..."
                value={filmes}
                onChange={handleInputChange}
                className="w-screen h-10 px-3 py-1 rounded-lg bg-tertiary-thompson border border-gray-300 focus:outline-none focus:border-blue-500 max-w-screen-md   "
            />
            </form>
            </div>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-black mb-6">Filmes Populares</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    { searchResults.length > 0?
                    
                    searchResults.map(filme => (
                        <div key={filme.id} className="bg-black rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img className="w-full h-72 object-cover" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt={filme.title} />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-white mb-2">{filme.title}</h3>
                                <Link to={`/filmes/${filme.id}`} className="text-red-600 hover:text-red- transition-colors duration-200">
                                    Saiba mais
                                </Link>
                            </div>
                        </div>
                    ))
                    :
                    <p>Seu filme não foi encontrado 😔</p>
                }
                </div>
            </div>
        </div>
    );
}

export default Filmes;
import data from '../../artigos.json'

function Filmes() {
    console.log(data)
    
    return (  
        <>
        <h1>Filmes</h1>
        {
            data.map(
                filmes=> (
                    <>
                    <h1 key={filmes.tittle}>{filmes.tittle}</h1>
                    <img src={filmes.image}/>
                    </>
                )
            )
        }
        </>
    );
}

export default Filmes;
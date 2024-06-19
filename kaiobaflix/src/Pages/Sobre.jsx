function Sobre() {
    return (  
        <>
        <div className="flex flex-row space-x-96">
        <div className="flex flex-col  w-72">
            <h1 className="text-4xl text-center">
                Sobre
            </h1>
            <p className="text-xl text-center">
                A nossa ideia é fazer um novo site para recomendar filmes e series para o nosso usuario.
                </p>
        </div>

        <div className="flex flex-col  w-72">
        <h1 className="text-4xl text-center">
            Quem somos nós?
        </h1>
        <p className="text-xl text-center">
        Meu nome é Kaio, CEO do Kaiobaflix, tenho 30 anos e a coisa que eu mais faço é assistir filmes e series, mas ja cansei de ser recomendado sempre os mesmos filmes e series, entao decidi fazer meu proprio site para recomendações.
        </p>
        </div>
        </div>
        </>
    );
}

export default Sobre;
import Navbar from "../Navbar/Navbar";

function Header() {
    return (  
        <header className=" flex bg-black text-white p-4 mb-4 justify-between">
            <span>Ola, Visitante!</span>
            <h1>Bem-Vindo ao Kaiobaflix! </h1>
            <Navbar/>
        </header>
    );
}
 
export default Header;
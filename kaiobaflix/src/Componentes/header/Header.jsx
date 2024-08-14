import Navbar from "../Navbar/Navbar";
import TrocaTemas from "../TrocaTemas/TrocaTemas";

function Header() {
    return (  
        <header className=" flex bg-black text-white p-4 mb-4 justify-between dark:bg-white">
            <span className="dark:text-black">Olá, amante do cinema</span>
            <h1 className="dark:text-black">Bem-Vindo ao Kaiobaflix! </h1>
            <Navbar/>
            <TrocaTemas/>
           
        </header>
    );
}
 
export default Header;
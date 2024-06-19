import {NavLink} from 'react-router-dom'

function Navbar() {
    return (  
        <nav>
            <ul className='flex gap-3'>
                <li><NavLink to="/"> Home </NavLink></li>
                <li><NavLink to="filmes"> Filmes </NavLink></li>
                <li><NavLink to="sobre"> Sobre </NavLink></li>
                <li><NavLink to="contato"> Contato </NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
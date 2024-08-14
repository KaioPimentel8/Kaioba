import {NavLink} from 'react-router-dom'

function Navbar() {
    return (  
        <nav>
            <ul className='flex gap-3'>
                <li className="dark:text-black"><NavLink to="/"> Home </NavLink></li>
                <li className="dark:text-black"><NavLink to="filmes"> Filmes </NavLink></li>
                <li className="dark:text-black"><NavLink to="sobre"> Sobre </NavLink></li>
                <li className="dark:text-black"><NavLink to="contato"> Contato </NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
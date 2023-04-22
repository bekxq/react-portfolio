import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";


const Header = () =>{
    
    return(
        <header>
            <nav>
            <div className="head">
                <h1 className="head__title"> Welcome to my portfolio </h1>
            <ul className="head__ul">
                <li className="head__li">
                    <NavLink to='/main'>Home</NavLink>
                </li>
                <li className="head__li">
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li className="head__li"> 
                <NavLink to='/skills'>Skills</NavLink>
                </li>
                <li className="head__li"><Link  to="projects1" spy={true} smooth={true}>Projects </Link></li>
                <li className="head__li"><Link  to="skills1" spy={true} smooth={true}>Contact </Link></li>
            </ul>
            </div>
        </nav>
        </header>
    )
}

export default Header;
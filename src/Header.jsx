import { Link } from "react-scroll";


const Header = () =>{
    
    return(
        <header>
            <nav>
            <div className="head">
                <h1 className="head__title"> Welcome to my portfolio </h1>
            <ul className="head__ul">
                <li className="head__li"><Link activeClass="active" to="home1" spy={true} smooth={true}> Home</Link></li>
                <li className="head__li"><Link  to="about1" spy={true} smooth={true}>About </Link></li>
                <li className="head__li"><Link  to="skills1" spy={true} smooth={true}>Skills </Link></li>
                <li className="head__li"><Link  to="projects1" spy={true} smooth={true}>Projects </Link></li>
                <li className="head__li"><Link  to="skills1" spy={true} smooth={true}>Contact </Link></li>
            </ul>
            </div>
        </nav>
        </header>
    )
}

export default Header;
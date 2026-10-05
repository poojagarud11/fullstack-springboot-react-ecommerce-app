import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBasket , faTags} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header className="header">
        <div className="container">
        <a href="/" className="link">
        <FontAwesomeIcon icon={faTags} className="fa-icon"/>
        <span  className="brand-title">EazyStore</span>
        </a>
        <nav className="easynav">
        <ul>
        <li>    
        <a href="/" className="navlink">
        Home
        </a>
        </li>
        <li>    
        <a href="/about" className="navlink">
        About
        </a>
        </li>
        <li>    
        <a href="/contact" className="navlink">
        Contact
        </a>
        </li>
        <li>    
        <a href="/login" className="navlink">
        Login
        </a>
        </li>
        <li>    
        <a href="/cart" className="navlink">
        <FontAwesomeIcon icon={faShoppingBasket} />
        </a>
        </li>
        </ul>
        </nav>
        </div>
    </header>
    );
};

export default Header;
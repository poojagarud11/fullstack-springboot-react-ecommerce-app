import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            Build with 
            <FontAwesomeIcon icon={faHeart} 
            className="footer-icon" 
            aria-hidden="true" /> 
            by 
            <a href="https://eazybyte.com" target="_blank" rel="noopener noreferrer">
                easyBytes
            </a>
        </footer>
    );
}
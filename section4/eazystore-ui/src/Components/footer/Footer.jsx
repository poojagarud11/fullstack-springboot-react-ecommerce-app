import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import styled from "styled-components";
import EasyButton from "../EasyButton";

const H1 = styled.h1`
    color:  #5b21b6;
    text-align: center;
`;

export default function Footer() {
    const isActive = Math.random() < 0.5; // Randomly set isActive to true or false
    return (
        <>
        <H1>Demo of styled-components from footer</H1>
        <EasyButton $primary>Submit</EasyButton>
        
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
       </>
    );
}
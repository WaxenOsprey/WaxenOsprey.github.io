import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const MobileNavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    };


    return ( 
        <>      
                <MobileNavWrapper>
                    <BurgerIcon onClick={toggleMenu}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} 
                        style={{ color: "#5cbcb1", height: "3rem", margin: "1rem"  }}  
                        />
                    </BurgerIcon>

                    <MobileNavContainer menuOpen={menuOpen}>
                        <MobileNavList>
                            <MobileNavItem>
                                <MobileNavListLink to="/" onClick={closeMenu}>Home</MobileNavListLink>
                            </MobileNavItem>
                            <MobileNavItem>
                                <MobileNavListLink to="/about" onClick={closeMenu}>About</MobileNavListLink>
                            </MobileNavItem>
                            <MobileNavItem>
                                <MobileNavListLink to="/projects" onClick={closeMenu}>Projects</MobileNavListLink>
                            </MobileNavItem>
                            <MobileNavItem>
                                <MobileNavListLink to="/contact" onClick={closeMenu}>Contact</MobileNavListLink>
                            </MobileNavItem>
                            <MobileNavItem>
                                <MobileCVLink href="/paulsamuelcumming.pdf" download>CV/Résumé</MobileCVLink>
                            </MobileNavItem>
                        </MobileNavList>
                    </MobileNavContainer>


                </MobileNavWrapper>
        </>
     );
}

const MobileNavWrapper = styled.div.attrs({ 'data-display-name': 'MobileNavWrapper' })`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    position: sticky;
    top: 0;
    background-color: rgba(11, 25, 48);


    /* background-color: grey;  */

    `

const BurgerIcon = styled.div.attrs({ 'data-display-name': 'BurgerIcon' })`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        cursor: pointer;


    }
`;

const MobileNavContainer = styled.div.attrs({ 'data-display-name': 'MobileNavContainer' })`
display: none;

@media (max-width: 768px) {
  display: ${(props) => (props.menuOpen ? 'block' : 'none')};
  /* padding: 2rem;
  margin-top: 6rem; */
}
`;

const MobileNavList = styled.ul.attrs({ 'data-display-name': 'MobileNavList' })`
    list-style-type: none;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
    padding: 0;
    text-align: left;
`;

const MobileNavItem = styled.li.attrs({ 'data-display-name': 'MobileNavItem' })`
    margin-bottom: 1rem;

`;

const MobileNavListLink = styled(Link).attrs({ 'data-display-name': 'MobileNavListLink' })`
    color: rgb(203, 214, 244);
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
    color: rgb(92, 188, 177);
    }
`;

const MobileCVLink = styled.a.attrs({ 'data-display-name': 'MobileCVLink' })`
    color: rgb(203, 214, 244);
    text-decoration: none;
    font-size: 1.5rem;
    display: block;

    &:hover {
    color: rgb(203, 214, 244);
    }
`;

 
export default MobileNavBar;
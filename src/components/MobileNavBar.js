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
                            <MobileNavListLink to="/">Home</MobileNavListLink>
                        </MobileNavItem>
                        <MobileNavItem>
                            <MobileNavListLink to="/about">About</MobileNavListLink>
                        </MobileNavItem>
                        <MobileNavItem>
                            <MobileNavListLink to="/projects">Projects</MobileNavListLink>
                        </MobileNavItem>
                        <MobileNavItem>
                            <MobileNavListLink to="/contact">Contact</MobileNavListLink>
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

const MobileNavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-top: 5rem;
    /* background-color: grey;  */

    `

const BurgerIcon = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        margin-left: 3rem;

        cursor: pointer;
    }
`;

const MobileNavContainer = styled.div`
display: none;

@media (max-width: 768px) {
  display: ${(props) => (props.menuOpen ? 'block' : 'none')};
  padding: 2rem;
  margin-top: 2rem;
}
`;

const MobileNavList = styled.ul`
    list-style-type: none;
    margin-top: 2rem;
    padding: 0;
    text-align: right;
`;

const MobileNavItem = styled.li`
    margin-bottom: 1rem;

`;

const MobileNavListLink = styled(Link)`
    color: rgb(203, 214, 244);
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
    color: rgb(92, 188, 177);
    }
`;

const MobileCVLink = styled.a`
    color: rgb(11, 25, 48);
    text-decoration: none;
    font-size: 1.5rem;
    display: block;

    &:hover {
    color: rgb(203, 214, 244);
    }
`;

 
export default MobileNavBar;
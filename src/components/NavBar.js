    import styled from 'styled-components';
    import { Link } from 'react-router-dom';
    import { useState } from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
    

    const NavBar = () => {

        const [menuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        }

        return ( 
            <>
                <BurgerIcon onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} 
                    style={{ color: "#5cbcb1", height: "3rem", margin: "1rem"  }}  
                    />
                </BurgerIcon>

                <NavContainer>
                    <HomeLink to="/">PC</HomeLink>
                    <NavList>
                        <NavListItem>
                            <SpanNumber>01. </SpanNumber>
                            <NavListLink to="/about">About</NavListLink>
                        </NavListItem>
                        <NavListItem>
                            <SpanNumber>02. </SpanNumber>
                            <NavListLink to="/projects">Projects</NavListLink>
                        </NavListItem>
                        <NavListItem>
                            <SpanNumber>03. </SpanNumber>
                            <NavListLink to="/contact">Contact</NavListLink>
                        </NavListItem>
                        <CVLink href="/paulsamuelcumming.pdf" download>CV/Résumé</CVLink>
                    </NavList>
                </NavContainer>
            </>
        );
    }

    const BurgerIcon = styled.div`
        display: none;

        @media (max-width: 768px) {
            display: block;
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            z-index: 2;
        }
    `;

    const NavContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: end;
        margin: 2rem;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 1;
        background-color: rgba(11,25,48, 0.7);
        padding: 1rem;

        @media (max-width: 768px) {
            display: none;


        }
    `;

    const HomeLink = styled(Link)`
        color:rgb(11,25,48);
        font-size: 1.5rem;
        font-weight: bold;
        margin-left: 1.5rem;
        padding: 0.5rem;
        text-decoration: none;
        height: 2rem;
        width: 2rem;
        border: 2px solid rgb(92,188,177);
        background-color: rgb(92,188,177);
        display: flex;
        justify-content: center;
        align-items: center;
        clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);

        &:hover {
            border: 2px solid rgb(203,214,244);
            background-color: rgb(203,214,244);

        }

        @media (max-width: 768px) {
            font-size: 1rem;
            padding: 0.25rem;


        }
    `;

    const NavList = styled.ul`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: end;
        list-style-type: none;
        margin: 0;
        padding: 0;

        @media (max-width: 768px) {
            font-size: 1rem;
            padding: 0.3rem;
        }
    `;

    const NavListItem = styled.li`
        color: rgb(203,214,244);
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        display: flex;
        text-decoration: none;
        margin-left: 2rem;
        margin-right: 2rem;
        align-items: center;

        @media (max-width: 768px) {
            font-size: 1rem;
            padding: 0.3rem;
        }
    `;

    const NavListLink = styled(Link)`
        color: rgb(203,214,244);
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        text-decoration: none;

            &:hover {
            color: rgb(92,188,177);
        }

        @media (max-width: 768px) {
            font-size: 1rem;
            padding: 0.3rem;
        }
    `;

    const SpanNumber = styled.span`
        color: rgb(92,188,177);
        margin-right: 0.5rem;

        @media (max-width: 768px) {
            font-size: 1rem;
            padding: 0.3rem;
        }
    `;

    const CVLink = styled.a`
        color:rgb(11,25,48);
        font-size: 1rem;
        font-weight: bold;
        margin: 0;
        margin-left: 2rem;
        padding: 0.5rem;
        text-decoration: none;
        height: 2rem;
        width: 6rem;
        border: 2px solid rgb(92,188,177);
        border-radius: 5px;
        color: rgb(92,188,177);
        display: flex;
        justify-content: center;
        align-items: center;

            &:hover {
            color: rgb(203,214,244);
            border: 2px solid rgb(203,214,244);
        }

        @media (max-width: 768px) {
            font-size: 1rem;
            padding: 0.3rem;
        }
    `;

    export default NavBar;
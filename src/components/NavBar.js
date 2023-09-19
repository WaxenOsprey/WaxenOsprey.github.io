import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <>
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
                <CVLink href="/paulsamuelcumming.pdf" download>CV/Resume</CVLink>
            </NavList>
        </NavContainer>

        </>
     );
}

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
`
const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: end;
    list-style-type: none;
    margin: 0;
    padding: 0;
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
`;

const SpanNumber = styled.span`
    color: rgb(92,188,177);
    margin-right: 0.5rem;
`

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
    border-radius: 10px;
    color: rgb(92,188,177);
    display: flex;
    justify-content: center;
    align-items: center;

        &:hover {
        color: rgb(203,214,244);
        border: 2px solid rgb(203,214,244);
    }
`;


  



 
export default NavBar;
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Home = () => {
    return ( 
    <>
        <HomeContainer>
            <Hi>Hi, my name is</Hi>
            <Name>Paul Cumming.</Name>
            <Headline>I am a Junior Software Developer.</Headline>
            <Message>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla massa tellus, sit amet rutrum lacus luctus id. Etiam posuere at lorem consectetur lacinia. Morbi in dui vel enim dignissim mattis nec sit amet magna. Phasellus dignissim nunc interdum mi maximus, in dapibus massa efficitur. Aliquam quis aliquet urna. Vestibulum nec urna semper, sagittis nisl eu, mollis enim. Nam rutrum sapien risus, ut eleifend erat fringilla nec. Donec et ipsum efficitur, lacinia nulla eget, viverra metus. Proin facilisis sapien non dui finibus consectetur. Phasellus sit amet nulla fringilla, sollicitudin leo id, interdum lectus. Fusce eu nisi non magna condimentum lobortis vitae varius ipsum. Suspendisse non odio eu sem accumsan tincidunt quis convallis ante. Sed mattis a urna vitae elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </Message>
            <Link to="/projects">
                <ActionButton > 
                    Check out my projects!
                </ActionButton>
            </Link>
        </HomeContainer>
    </> );
}

const HomeContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin: 6rem;
`;
 

const Hi = styled.p`
    color: rgb(92,188,177);
    font-size: 1rem;
    margin: 0;
    padding: 0;
`;

const Name = styled.p`
    color: rgb(203,214,244);
    font-size: 5rem; 
    margin: 0;
    padding: 0;
`

const Headline = styled.p`
    color: rgb(135,145,174);
    font-size: 4rem;
    margin: 0;
    padding: 0;
`

const Message = styled.p`
    color: rgb(135,145,174);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
`

const ActionButton = styled.button`
    color: rgb(92,188,177);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    border: 2px solid rgb(92,188,177);
    display: flex;
    justify-content: center;
    background-color: transparent;
    align-items: center;
    height: 3rem;
    width: 20rem;
    border-radius: 1rem;
    cursor: pointer;
    &:hover {
        color: rgb(203,214,244);
        border: 2px solid rgb(203,214,244);

    }
`;

export default Home;
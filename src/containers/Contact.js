import styled from 'styled-components';
import worldMap from '../assets/world3.svg'

const Contact = () => {
    return ( 
        <>
            <ContactContainer>
                <Title>Contact</Title>
                <p>This is the contact page</p>
                <WorldMap src={worldMap} alt="world map" />
            </ContactContainer>
        </>
     );
}



const Title = styled.p`
    color: rgb(203,214,244);
    font-size: 5rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
`;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8rem;
    width: 100%;
`;

const WorldMap = styled.img`
    width: 75%;
    height: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: rgb(11,25,48);
    color: rgb(92,188,177);
`;


 
export default Contact;
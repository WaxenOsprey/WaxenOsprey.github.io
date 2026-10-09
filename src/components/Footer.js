import styled from 'styled-components';

const Footer = () => {

    const email = 'paulsamuelcummingdev@gmail.com';


    return ( 
        <>
        <FooterContainer>
            <FooterContent>Website built with React JS and hosted on GitHub pages. Paul Cumming 2023.</FooterContent>
        </FooterContainer>

        </>
     );
}

const FooterContainer = styled.div.attrs({ 'data-display-name': 'FooterContainer' })`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 15%;
    margin-right: 10%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100vh;

    @media (max-width: 768px){
        display: none;
    }
`;

const FooterContent = styled.p.attrs({ 'data-display-name': 'FooterContent' })`
    color: rgb(203,214,244);
    border-bottom: 1px solid rgb(203,214,244);
    padding: 0.5rem;

    @media (max-width: 768px){
        text-align: center;
    }
`;
 
export default Footer;
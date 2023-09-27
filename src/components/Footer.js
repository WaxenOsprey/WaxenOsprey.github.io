import styled from 'styled-components';

const Footer = () => {

    const email = 'paulsamuelcummingdev@gmail.com';


    return ( 
        <>
        <SideEmailContainer>
            <SideEmail>
                <Email href={`mailto:${email}`}>paulsamuelcummingdev@gmail.com</Email>
            </SideEmail>
        </SideEmailContainer>
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

const SideEmailContainer = styled.div.attrs({ 'data-display-name': 'SideEmailContainer' })`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin-top: auto;

    @media (max-width: 768px){
        display: none;
    }

    
`;
const SideEmail = styled.p.attrs({ 'data-display-name': 'SideEmail' })`
    color: rgb(203,214,244);
    font-size: 1rem;
    padding-right: 1rem;
    padding: 0.3rem;
    line-height: 1.5;
    border-top: 1px solid rgb(203,214,244);
    /* border-right: 1px solid rgb(203,214,244); */
    transform: rotate(90deg);

    &:hover{
        border-top: 1px solid rgb(92,188,177);
    }

    @media (max-width: 768px){
        transform: none;
        border-top: none;
        padding: 0;
        font-size: 0.8rem;
        margin-top: 1rem;
    }
`;

const Email = styled.a.attrs({ 'data-display-name': 'Email' })`
    text-decoration: none;
    color: rgb(203,214,244);

    &:hover {
        color: rgb(92,188,177);
    }

    @media (max-width: 768px){
        font-size: 0.8rem;
    }
`
 
export default Footer;
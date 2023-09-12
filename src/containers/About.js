import styled from 'styled-components';
import profilePic from '../assets/pic5.jpg'

const About = () => {
    return ( 
    <>
                <AboutContainer>
                    <Title>About</Title>
                    <Message>This is the about page</Message>

                    <AboutWrapper>
                        <UpperContainer>
                            <ProfilePic src={profilePic} alt="profile picture"/>
                            <UpperWrapper>
                                <AboutSection>
                                Highly motivated and creative software developer with a background in history, heritage and tourism. I have just completed a 16 week intensive professional software development course, where I developed skills in Python, JavaScript and Java. 

                                </AboutSection>
                            </UpperWrapper>
                        </UpperContainer>

                        <AboutSection>
                        My strengths lie in my capacity for self-driven research and my proven commitment to lifelong learning. I excel in communicating complex information clearly and concisely. Additionally, I have valuable experience in working efficiently in busy and fast-paced environments.

                        </AboutSection>

                        <AboutSection>
                        Despite an ongoing passion for history and heritage, I have pursued a new career in software development, to leverage my strengths which I believe are well-suited to the tech sector. I thoroughly enjoy building things and being part of ambitious projects. I enjoy collaborating in busy team environments, yet I am also happy to work independently. I strongly believe in the central role of technology in driving society forward and finding solutions to improve our lives. My professional ambition is to find a place in the Scottish tech ecosystem where I can contribute effectively.
                        </AboutSection>
                    </AboutWrapper>

                </AboutContainer>
        

        
    </> );
}





const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8rem;
    margin-right: 8rem;
    width: 100%;
`;

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const UpperWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;

`;

const UpperContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 2rem;
    justify-content: space-between;

`;


const Title = styled.p`
    color: rgb(203,214,244);
    font-size: 4rem; 
    margin: 0;
    padding: 0;
;`

const Message = styled.p`
    color: rgb(135,145,174);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    border-top: 2px solid rgb(92,188,177);
    border-right: 2px solid rgb(92,188,177);
`

const ProfilePic = styled.img`
    height: 400px;
    width: 400px;
    border-radius: 50%;
    margin: 2rem;
`;
 
const AboutSection = styled.p`
    color: rgb(203,214,244);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;

`

export default About;
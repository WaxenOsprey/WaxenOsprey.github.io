import styled from 'styled-components';
import profilePic from '../assets/pic5.jpg'

const About = () => {
    return ( 
    <>
                <AboutContainer>
                    <Title>About</Title>
                    <Message></Message>

                    <AboutWrapper>
                        <UpperContainer>
                            <ProfilePic src={profilePic} alt="profile picture"/>
                            <UpperWrapper>
                                <AboutSection>
                                Hello, I'm Paul Cumming, a recently trained Software Engineer with a passion for technology and a background in heritage and tourism. My journey into the tech world began after completing an intensive 16-week Professional Software Development course at CodeClan Digital Skills Academy, where I earned a PDA in Software Development. However, my transition from over five years in the heritage and tourism sector was not a sudden change; it was a well-thought-out decision to embrace fresh challenges and discover a field that values continuous personal growth.

My unique perspective on technology is rooted in my background in heritage and tourism. For more than five years, I built my skills through roles ranging from conducting historical tours at Edinburgh Castle to ensuring visitor and site safety. Prior to this, I also pursued my academic interests in history at Edinburgh University. This academic experience enhanced my research, analysis, and communication skills, which have proven invaluable in my both my heritage and tech careers.

My technical education at CodeClan provided me with a strong foundation in Agile best practices, Test-Driven Development (TDD), and Object-Oriented Programming (OOP). Proficient in languages like Python, JavaScript, and Java, I'm equipped to tackle a wide range of challenges. Beyond formal education, my experiences include providing computer repairs and upgrades at Internuts Computer Repairs.

As I continue to learn, I'm driven by the belief that technology fuels societal progress. My aspiration is to find my niche within Scotland's vibrant tech ecosystem, where I can make meaningful contributions based on my diverse experiences and expertise.

For more insights into my journey, you can explore my LinkedIn and GitHub profiles. Feel free to get in touch!

                                </AboutSection>
                            </UpperWrapper>
                        </UpperContainer>

                        <AboutSection>

                        </AboutSection>

                        <AboutSection>
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
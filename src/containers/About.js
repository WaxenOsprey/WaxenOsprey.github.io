import styled from 'styled-components';
import profilePic from '../assets/pic5.jpg'

import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

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
                                    Hello and thank you for visiting my site! My name is Paul Cumming, and I'm a newly trained Software Engineer actively seeking opportunities in the tech sector. My background lies in heritage and tourism, where I enjoyed a fulfilling career immersed in the world of Scottish history. However, I recently made an ambitious decision to retrain in software development, where I could continue to expand my skills and face new challenges. My journey into coding has been a life-changing experience. Along the way, I've learned valuable lessons about the significance of self-belief and maintaining a positive mindset while overcoming some of the substantial challenges that come with acquiring an entirely new skillset. Alongside the crucial support of my family and friends, I've been deeply encouraged by the collaborative and supportive environment of the Scottish tech sector. Perhaps most importantly, during my journey, what was once a lifelong interest in technology and its importance has evolved into a genuine passion for the craft of building software and an unwavering determination to establish a career in software development.
                                </AboutSection>
                            </UpperWrapper>
                        </UpperContainer>
                            <AboutSectionExtra>
                                I have long held an interest in technology. In the 90s, my childhood saw the introduction of console gaming to many homes, including (eventually!) my own. From playing my cousin's Gameboy in Inverness when I was 4, I have always been obsessed with video games and continue to be thrilled by the ability of games to express a sense of technological progress to myself and many of my peers. As we get older and the challenges of life and society multiply, at least games and technology represent something that just gets better! My generation’s childhood was interrupted and influenced by the arrival of home internet, which gives many of us, including myself, a deep appreciation for the transformative power of technology. I built my first desktop computer when I was 17 using what I learned in Computing studies class. In my twenties, I worked for several years in a small neighborhood repair shop, fixing computers for small businesses and the community. Without hesitation, I look back on that job as one of my best. Although it wasn’t easy for a young man to do technical work without formal training, I thrived under the challenge and never gave up when a tricky job came in. At a young age, I discovered I had a technical mindset, could handle pressure and solve problems, and I could provide a useful service to my community. This experience massively influenced my situation today.
                            </AboutSectionExtra>
                            <AboutSectionExtra>
                                I’ve never been good at having just one passion in life, and around this time, I began to attend night classes so I could get into Edinburgh University to study History as a mature student. Qualifying to study and subsequently completing my History degree is an achievement I am still very proud of. To this day, my academic interest in history and heritage continues to grow. Working at Edinburgh Castle as a historic site guide was a dream graduation job, and I enjoyed my time there very much. However, by 2022, I began to feel that the time was approaching to move on to something else.
                            </AboutSectionExtra>
                            <AboutSectionExtra>
                                During the Covid-19 pandemic, I volunteered as the staff Health and Safety representative for Historic Environment Scotland, helping organize safety protocols to protect visitors and staff. The experience helped me realize I was ready for new roles, and during that time, I found myself increasingly interested in the world of tech once more. I spent some time after work completing the online CS50x course by Harvard University, which confirmed I had an interest and capacity for coding. I decided to make the jump and left my job to attend the Professional Software Development course at CodeClan. CodeClan provided me with a solid foundation in Agile best practices, TDD, OOP, and an array of languages and frameworks, including Python, JavaScript, Java, and more. I've put these skills to work in various projects which you can check out here. I completed the course in June and graduated with an additional PDA in Software Development. Every step since then has been a thrill, and I now stand determined to take my career into this new and exciting world of technology and software.
                            </AboutSectionExtra>
                            <AboutSectionExtraLast>
                                When I’m not coding or reading about history, I love to listen to and play music. I am a long-term guitar player, but these days I am trying to learn the mandolin (time permitting). I also love to play video games, mainly on the Xbox but a bit of PC gaming too. I also enjoy walking, especially if there are hills or heritage involved! Please feel free to contact me if you have questions, would like to collaborate, or work together!
                            </AboutSectionExtraLast>
                    </AboutWrapper>

                </AboutContainer>
        

        
    </> );
}





const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
    margin-right: 4rem;
    padding-left: 2rem;
    padding-right: 6rem;
    width: 100%;
    flex-grow: 1;
`;

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    /* padding-right: 4rem; */
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
`;

const Message = styled.p`
    color: rgb(135,145,174);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    height: 2rem;
    border-top: 2px solid rgb(92,188,177);
    border-right: 2px solid rgb(92,188,177);
`;

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
`;

 
const AboutSectionExtra = styled.p`
    color: rgb(203,214,244);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    /* width: 75%; */
`;

const AboutSectionExtraLast = styled.p`
    color: rgb(203,214,244);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    width: 75%;
`;



export default About;
import styled from 'styled-components';
import profilePic from '../assets/pic5.jpg';

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
            <ProfilePic src={profilePic} alt="profile picture" />
            <UpperWrapper>
              <AboutSection>
                Thanks for visiting my site! My name is Paul Cumming, and I'm a newly trained Software Developer seeking opportunities in the tech sector. My background lies in heritage and tourism, where I enjoyed a career immersed in Scottish history. However, I recently made a decision to retrain in software development, where I could continue to grow my skills and find new challenges. My journey into coding has been a life-changing experience. Along the way, I've learned valuable lessons about the significance of self-belief and maintaining a positive mindset while overcoming some of the substantial challenges that come with acquiring an entirely new skillset. Alongside the crucial support of my family and friends, I've been deeply encouraged by the collaborative and supportive environment of the Scottish tech sector. Perhaps most importantly, during my journey, what was once a long-held interest in technology and its importance has evolved into a genuine appreciation for the craft of building software and an unwavering determination to establish a career in software development.
              </AboutSection>
            </UpperWrapper>
          </UpperContainer>
          <AboutSectionExtra>
          I have had an interest in technology my whole life. In the 90s, my childhood saw the introduction of console gaming to many homes, including (eventually) my own. From playing my cousin's Gameboy in Inverness when I was 4, I have always been obsessed with video games and continue to be thrilled by the ability of games to express a sense of technological progress to myself and many of my peers. When home internet became accessible, I was around 12. Its profound impact on society and culture has been immeasurable, and witnessing this has underscored the transformative power of technology. I built my first desktop computer when I was 17 using what I learned in Computing studies class. In my 20s, I worked for several years in a small neighbourhood repair shop, fixing computers for small businesses and the community. At a young age, I discovered I had a technical mindset, could handle pressure and solve problems. This experience massively influenced my situation today.
          </AboutSectionExtra>
          <AboutSectionExtra>
          I’ve never been good at having just one interest in life, and around this time, I began to attend night classes so I could get into Edinburgh University to study History as a mature student. Qualifying to study and subsequently completing my History degree is an achievement I am still very proud of. To this day, my academic interest in history and heritage continues to grow. Working at Edinburgh Castle as a historic site guide was a fantastic graduation job, and I enjoyed my time there very much. However, by 2022, I began to feel that the time was approaching to move on to something else.
          </AboutSectionExtra>
          <AboutSectionExtra>
          During the Covid-19 pandemic, I volunteered as the staff Health and Safety representative for Historic Environment Scotland, helping organise safety protocols to protect visitors and staff. The experience helped me realise I was ready to learn new things and take on new responsibilities, and during that time, I found myself increasingly interested in the world of tech once more. I spent some time after work completing the online CS50x course by Harvard University, which confirmed I had an interest and capacity for coding. I decided to make the jump and left my job to attend the Professional Software Development course at CodeClan. CodeClan provided me with a solid foundation in Agile best practices, TDD, OOP, and an array of languages and frameworks, including Python, JavaScript, Java, and more. I've put these skills to work in various projects which you can check out here. I completed the course in June and graduated with an additional PDA in Software Development.           </AboutSectionExtra>
          <AboutSectionExtraLast>
          When I’m not coding or reading random history, I love to listen to and play music. I am a long-term guitar player, but these days I am trying to learn the mandolin (time permitting). I’m a keen gamer, mainly on the Xbox but a bit of PC gaming too. I also enjoy walking, especially if there are hills or heritage involved. Feel free to <ContactLink href='/contact'>get in touch! </ContactLink>         </AboutSectionExtraLast>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

const ContactLink = styled.a.attrs({ 'data-display-name': 'ContactLink' })`
  color: rgb(92, 188, 177);
  font-weight: bold;
  text-decoration: none;
`

const AboutContainer = styled.div.attrs({ 'data-display-name': 'AboutContainer' })`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
  margin-left: 4rem;
  margin-right: 4rem;
  padding: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0;
    height: 100%;
    width: 100%;
  }
`;

const AboutWrapper = styled.div.attrs({ 'data-display-name': 'AboutWrapper' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const UpperWrapper = styled.div.attrs({ 'data-display-name': 'UpperWrapper' })`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpperContainer = styled.div.attrs({ 'data-display-name': 'UpperContainer' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 769px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Title = styled.p.attrs({ 'data-display-name': 'Title' })`
  color: rgb(203, 214, 244);
  font-size: 4rem;
  margin: 0;
  padding: 0;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Message = styled.p.attrs({ 'data-display-name': 'Message' })`
  color: rgb(135, 145, 174);
  font-size: 1rem;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  height: 2rem;
  border-top: 2px solid rgb(92, 188, 177);
  border-right: 2px solid rgb(92, 188, 177);
`;

const ProfilePic = styled.img.attrs({ 'data-display-name': 'ProfilePic' })`
  height: 350px;
  width: 350px;
  border-radius: 50%;
  margin: 4rem;

    @media (max-width: 768px) {
        height: 200px;
        width: 200px;
        margin: 2rem;
    }
`;

const AboutSection = styled.p.attrs({ 'data-display-name': 'AboutSection' })`
  color: rgb(203, 214, 244);
  font-size: 1rem;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 1.5;

    @media (max-width: 768px) {
        
    }
`;

const AboutSectionExtra = styled.p.attrs({ 'data-display-name': 'AboutSectionExtra' })`
  color: rgb(203, 214, 244);
  font-size: 1rem;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  
`;

const AboutSectionExtraLast = styled.p.attrs({ 'data-display-name': 'AboutSectionExtraLast' })`
  color: rgb(203, 214, 244);
  font-size: 1rem;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

export default About;

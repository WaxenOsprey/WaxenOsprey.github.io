import styled from 'styled-components';
import profilePic from '../assets/pic5.jpg';
import { Link } from 'react-router-dom';

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
              I’m Paul Cumming, a QA Automation Engineer with over two years of experience in healthcare technology at The Craneware Group.
              I specialise in building reliable systems, automating testing processes, and improving software quality across complex distributed services. My current role involves both automation and development work, and I’m actively progressing toward a full Software Engineer position.
              </AboutSection>
            </UpperWrapper>
          </UpperContainer>
          <AboutSectionExtra>
          I’ve been passionate about technology from a young age, building my first desktop as a teenager and helping small businesses and my community with computer repairs. This early experience shaped my technical mindset, problem-solving skills, and ability to work under pressure - skills I now apply professionally in software development and automation.
          </AboutSectionExtra>
          <AboutSectionExtra>
          After a career in heritage and history, including completing a History degree and working at Edinburgh Castle, I retrained as a software developer through the Professional Software Development course at CodeClan. There I gained practical experience with Agile workflows, TDD, OOP, and languages including Python, JavaScript, and Java, which I’ve applied in professional and personal projects.
          </AboutSectionExtra>
          <AboutSectionExtra>
          </AboutSectionExtra>
          <AboutSectionExtraLast>
          Beyond work, I enjoy exploring history, playing and learning music (guitar), gaming, and walking - especially in areas rich in heritage. I’m always keen to discuss software, technology, or interesting projects, so feel free to <ContactLink to="/contact">get in touch.</ContactLink>
          </AboutSectionExtraLast>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

const ContactLink = styled(Link).attrs({ 'data-display-name': 'ContactLink' })`
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
  height: 180px;
  width: 180px;
  border-radius: 50%;
  margin: 4rem;

    @media (max-width: 768px) {
        height: 50px;
        width: 50px;
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

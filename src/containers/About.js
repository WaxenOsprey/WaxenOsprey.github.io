
import styled from 'styled-components';
import profilePic from '../assets/pic5.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AboutContainer>
      <Title>About</Title>
      <SectionDivider />

      <AboutWrapper>
        <UpperContainer>
          <IntroWrapper>
            <Paragraph>
              I'm a software engineering
              professional working in healthcare technology
              at The Craneware Group. Since moving into the
              industry in 2023, I've worked across technical
              support, implementation scripting, and QA
              automation, with my role more recently evolving
              to focus primarily on software development.
              I work mainly with C# and .NET, and have a
              particular interest in software design
              and architecture.
            </Paragraph>
          </IntroWrapper>

          <ProfilePic
            src={profilePic}
            alt="Portrait of Paul Cumming"
          />
        </UpperContainer>

        <Paragraph>
          My interest in technology goes back much further,
          from building my first computer as a teenager to
          helping small businesses and people in my community
          with computer repairs. Before moving into software,
          however, I pursued a career in history and heritage.
          I completed a degree in History and worked in the
          heritage and tourism sector, including at
          Edinburgh Castle.
        </Paragraph>

        <Paragraph>
          I eventually decided to pursue my longstanding
          interest in technology professionally, retraining
          through CodeClan's Professional Software Development
          course. Since then, I've enjoyed developing my
          skills through both professional experience and
          personal projects. Outside of work, I continue
          to build applications and explore different
          technologies, including my ongoing
          project, Posterity.
        </Paragraph>

        <Paragraph>
          Beyond software development, I enjoy reading and
          exploring history, playing guitar, gaming, and
          walking, particularly in places with interesting
          heritage. I'm always happy to discuss technology,
          software development, or projects,
          so feel free to{' '}
          <ContactLink to="/contact">
            get in touch.
          </ContactLink>
        </Paragraph>
      </AboutWrapper>
    </AboutContainer>
  );
};

// Styled Components

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem;
  }
`;

const Title = styled.h1`
  color: rgb(203, 214, 244);
  font-size: 4rem;
  font-weight: normal;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgb(92, 188, 177);
  margin: 1.5rem 0 3rem;

  @media (max-width: 768px) {
    margin: 1rem 0 2rem;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  gap: 1.5rem;
`;

const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
    margin-bottom: 0;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

const ProfilePic = styled.img`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const Paragraph = styled.p`
  color: rgb(203, 214, 244);
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

const ContactLink = styled(Link)`
  color: rgb(92, 188, 177);
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: rgb(203, 214, 244);
    text-decoration: underline;
  }
`;

export default About;

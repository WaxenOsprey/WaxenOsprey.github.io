import styled from 'styled-components';
import worldMap from '../assets/world5.svg';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const email = 'paulsamuelcummingdev@gmail.com';
  const gitHub = 'https://github.com/WaxenOsprey';
  const linkedIn = 'https://www.linkedin.com/in/paulsamuelcummingdev/';

  return (
    <>
      <ContactContainer>
        <Title>Contact</Title>
        <Message>I am based in <strong>Edinburgh, United Kingdom</strong>. Contact me using the links below!</Message>
        <MapWrapper>
          <WorldMap src={worldMap} alt="world map" />
        </MapWrapper>
        <ContactWrapper>
          <ContactDetail>
            <ContactHeading>LinkedIn:</ContactHeading>
            <LinkedInLink href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn Profile</LinkedInLink>
          </ContactDetail>
          <ContactDetail>
            <ContactHeading>GitHub:</ContactHeading>
            <GitHubLink href={gitHub} target="_blank" rel="noopener noreferrer">GitHub Profile</GitHubLink>
          </ContactDetail>
          <ContactDetail>
            <ContactHeading>Email:</ContactHeading>
            <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
          </ContactDetail>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

const ContactContainer = styled.div.attrs({ 'data-display-name': 'ContactContainer' })`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  margin-right: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
    align-items: center;
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

const MapWrapper = styled.div.attrs({ 'data-display-name': 'MapWrapper' })`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const ContactWrapper = styled.div.attrs({ 'data-display-name': 'ContactWrapper' })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    margin: 1rem;
  }
`;

const ContactDetail = styled.div.attrs({ 'data-display-name': 'ContactDetail' })`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WorldMap = styled.img.attrs({ 'data-display-name': 'WorldMap' })`
  width: 70%;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: rgb(11, 25, 48);
  color: rgb(92, 188, 177);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Message = styled.p.attrs({ 'data-display-name': 'Message' })`
  color: rgb(92, 188, 177);
  font-size: 1rem;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  border-top: 2px solid rgb(92, 188, 177);
  border-right: 2px solid rgb(92, 188, 177);
  padding-top: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    border-right: none;
  }
`;

const ContactHeading = styled.p.attrs({ 'data-display-name': 'ContactHeading' })`
  color: rgb(203, 214, 244);
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const EmailLink = styled.a.attrs({ 'data-display-name': 'EmailLink' })`
  color: rgb(92, 188, 177);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const LinkedInLink = styled.a.attrs({ 'data-display-name': 'LinkedInLink' })`
  color: rgb(92, 188, 177);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const GitHubLink = styled.a.attrs({ 'data-display-name': 'GitHubLink' })`
  color: rgb(92, 188, 177);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export default Contact;

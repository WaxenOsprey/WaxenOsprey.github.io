import styled from 'styled-components';
import worldMap from '../assets/world5.svg';
import { useEffect } from 'react';



const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
    ,[]);

    const email = 'paulsamuelcummingdev@gmail.com';
    const gitHub = 'https://github.com/WaxenOsprey';
    const linkedIn = 'https://www.linkedin.com/in/paulsamuelcummingdev/';

    return (
    <>
      <ContactContainer>
        <Title>Contact</Title>
        <Message>I am based in <strong>Edinburgh</strong>, United Kingdom</Message>
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

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8rem;
  margin-right: 8rem;
  width: 100%;
`;

const Title = styled.p`
  color: rgb(203, 214, 244);
  font-size: 4rem;
  margin: 0;
  padding: 0;
`;

const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
`;

const WorldMap = styled.img`
  width: 70%;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: rgb(11, 25, 48);
  color: rgb(92, 188, 177);
`;

const Message = styled.p`
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
`;

const ContactHeading = styled.p`
  color: rgb(203, 214, 244);
  margin-right: 1rem;
`;

const EmailLink = styled.a`
  color: rgb(92, 188, 177);
`;

const LinkedInLink = styled.a`
  color: rgb(92, 188, 177);
`;

const GitHubLink = styled.a`
  color: rgb(92, 188, 177);
`;

export default Contact;

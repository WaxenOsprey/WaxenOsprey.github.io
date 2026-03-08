import React from 'react';
import styled from 'styled-components';
import LogoCircle from '../components/LogoCircle';
import codeClanLogo from '../assets/CodeClanLogo.png';

const CodeClan = () => {
  return (
    <CodeClanContainer>
      <Header>
        <TitleLink href="https://www.codeclan.com/" target="_blank" rel="noopener noreferrer">
          <Title>CodeClan</Title>
        </TitleLink>
            <LogoLink href="https://www.codeclan.com/" target="_blank" rel="noopener noreferrer">
              <ProjectLogos>
                  <LogoCircle src={codeClanLogo} alt="CodeClan" />    
              </ProjectLogos>
            </LogoLink>
      </Header>

      <Section>
        <SectionTitle>Professional Software Development Training</SectionTitle>
        <Paragraph>
          I completed the Professional Software Development course at CodeClan, gaining hands-on experience with Agile workflows, Test-Driven Development (TDD), and Object-Oriented Programming (OOP). The course covered multiple languages and frameworks, including Python, JavaScript, and Java, and emphasized collaboration, code quality, and real-world project delivery.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Projects</SectionTitle>
        <Paragraph>
          During the course, I built several projects that strengthened my understanding of software development principles, including web applications, APIs, and automation scripts. These projects provided a foundation for problem-solving, debugging, and learning modern development workflows.
        </Paragraph>
        <ProjectList>
          <ProjectItem>
            <ProjectName>SolarSystem.DB</ProjectName> – A solo full-stack Python/Flask project with a PostgreSQL database. The app allows users to explore and manage Solar System entities, including login functionality and CRUD operations.
          </ProjectItem>
          <ProjectItem>
            <ProjectName>PhoenixTrader</ProjectName> – A group project to build a full-stack investment portfolio app using React, Node.js, Express, MongoDB, and the FinnHub API. It includes portfolio management, watchlists, performance analytics, and real-time stock tracking.
          </ProjectItem>
          <ProjectItem>
            <ProjectName>Gwentish!</ProjectName> – Capstone project recreating the Gwent card game. Built with Java backend (Spring Boot) and React frontend, featuring player accounts, personalised decks, real-time score updates, and strategic card play.
          </ProjectItem>
        </ProjectList>
      </Section>

      <Section>
        <SectionTitle>Key Skills Gained</SectionTitle>
        <SkillsList>
          Agile, TDD, OOP, Python, JavaScript, Java, React, Node.js, Express, PostgreSQL, MongoDB, Git, Collaboration
        </SkillsList>
      </Section>
    </CodeClanContainer>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CodeClanContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: rgb(135, 145, 174);
  margin-bottom: 2rem;
  &:hover {
    color: rgb(92, 188, 177);
  }
`;

const TitleLink = styled.a`
  text-decoration: none;
`;

const ProjectLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: 1rem;
`;

const LogoLink = styled.a`
  display: inline-block; 
  text-decoration: none;
`;
  
const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: rgb(92, 188, 177);
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  color: rgb(203, 214, 244);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ProjectItem = styled.li`
  color: rgb(203, 214, 244);
  margin-bottom: 0.5rem;
`;

const ProjectName = styled.span`
  font-weight: bold;
  color: rgb(92, 188, 177);
`;

const SkillsList = styled.p`
  color: rgb(203, 214, 244);
  line-height: 1.6;
`;

export default CodeClan;
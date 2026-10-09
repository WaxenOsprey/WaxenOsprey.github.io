import React from 'react';
import styled from 'styled-components';
import LogoCircle from '../components/LogoCircle';
import cranewareLogo from '../assets/TNGLogo.jpg';

const Craneware = () => {
  return (
    <CranewareContainer>
      <Header>
        <TitleLink href="https://www.thecranewaregroup.com/" target="_blank" rel="noopener noreferrer">
          <Title>The Craneware Group</Title>
        </TitleLink>
        <LogoLink href="https://www.thecranewaregroup.com/" target="_blank" rel="noopener noreferrer">
          <ProjectLogos>
            <LogoCircle src={cranewareLogo} alt="Craneware" />
          </ProjectLogos>
        </LogoLink>
      </Header>

      <Section>
        <SectionTitle>Professional Experience</SectionTitle>
        <Paragraph>
          Since joining The Craneware Group, I have held three progressive roles, gaining experience across customer support, scripting, QA automation, and development within healthcare analytics platforms.
        </Paragraph>
      </Section>

      {/* QA Automation Engineer */}
      <Section>
        <SectionTitle>QA Automation Engineer (March 2025 – Present)</SectionTitle>
        <Paragraph>
          Working on <b>Trisus Claims Informatics (TCI)</b>, a healthcare analytics platform that enables providers to analyse claims and remittances, identify revenue risks, and implement action plans.
        </Paragraph>
        <Paragraph>
          Alongside my QA automation responsibilities, I am actively working on development tickets, building internal tools, and contributing to the codebase under the guidance of senior developers. This hands-on experience is helping me grow towards a software development role and deepen my understanding of backend workflows, architecture, and best practices in C# and .NET.
        </Paragraph>
        <ProjectList>
          <ProjectItem>Designed, implemented, and maintained automated tests and tools in C# and .NET to ensure regression coverage and product stability.</ProjectItem>
          <ProjectItem>Collaborated with developers, product managers, and QA to refine acceptance criteria, identify edge cases, and validate complex claims and remittance workflows.</ProjectItem>
          <ProjectItem>Championed test automation best practices, improving release confidence, feedback loops, and long-term maintainability.</ProjectItem>
        </ProjectList>
      </Section>

      {/* Software Support Implementation Representative */}
      <Section>
        <SectionTitle>Software Support Implementation Representative (Nov 2024 – Mar 2025)</SectionTitle>
        <Paragraph>
          Focused on <b>Trisus Integrated Scripting Module (ISM)</b>, implementing scripting solutions between customers’ Patient Accounting Systems (PAS) and the Trisus platform.
        </Paragraph>
        <ProjectList>
          <ProjectItem>Led Requirement Gathering Meetings with healthcare clients to analyse PAS workflows and ensure accurate automation of charge updates and management processes.</ProjectItem>
          <ProjectItem>Developed and tested VBA scripts executed via Boston Workstation to automate critical tasks including charge updates, modifications, activations, and deactivations.</ProjectItem>
          <ProjectItem>Provided real-time troubleshooting, remote diagnostics, and ongoing script maintenance to ensure reliability and minimal disruption to customer systems.</ProjectItem>
        </ProjectList>
      </Section>

      {/* Software Support Representative */}
      <Section>
        <SectionTitle>Software Support Representative (Oct 2023 – Mar 2025)</SectionTitle>
        <Paragraph>
          Gained a strong technical and user-centric understanding of the full range of Craneware products while diagnosing and resolving complex software issues for customers.
        </Paragraph>
        <ProjectList>
          <ProjectItem>Provided high-quality support, guiding clients through technical challenges and facilitating smooth transitions from legacy systems to modern platforms.</ProjectItem>
          <ProjectItem>Partnered with development teams to identify bugs, suggest improvements, and actively contribute to product quality and customer experience.</ProjectItem>
          <ProjectItem>Gained practical experience in C# and .NET under mentorship, learning advanced programming concepts and professional coding standards.</ProjectItem>
        </ProjectList>
      </Section>

      <Section>
        <SectionTitle>Key Skills Gained</SectionTitle>
        <SkillsList>
          C#, .NET, VBA, QA Automation, Test Development, Healthcare Analytics, Collaboration, Customer-Facing Requirements Gathering, Problem Diagnosis, Software Testing Best Practices
        </SkillsList>
      </Section>
    </CranewareContainer>
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

const CranewareContainer = styled.div`
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

const SkillsList = styled.p`
  color: rgb(203, 214, 244);
  line-height: 1.6;
`;

export default Craneware;
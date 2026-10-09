
import React from 'react';
import styled from 'styled-components';
import LogoCircle from '../components/LogoCircle';
import cranewareLogo from '../assets/TNGLogo.jpg';

const Craneware = () => {
  return (
    <CranewareContainer>
      <Header>
        <TitleLink
          href="https://www.thecranewaregroup.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Title>The Craneware Group</Title>
        </TitleLink>
        <LogoLink
          href="https://www.thecranewaregroup.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectLogos>
            <LogoCircle src={cranewareLogo} alt="Craneware" />
          </ProjectLogos>
        </LogoLink>
      </Header>

      {/* Professional Experience */}
      <Section>
        <SectionTitle>Professional Experience</SectionTitle>

        <Paragraph>
          The Craneware Group is a healthcare technology
          company developing software solutions that help
          hospitals and health systems manage revenue,
          improve financial performance, and meet regulatory
          and compliance requirements. Its products support
          areas including healthcare analytics, revenue
          integrity, medical necessity, and audit management.
        </Paragraph>

        <Paragraph>
          Since joining in October 2023, I've worked across
          technical support, implementation scripting, and
          QA automation, with my responsibilities more
          recently evolving towards software development.
          This progression has given me experience across
          the software lifecycle and exposure to both modern
          cloud-based architectures and established legacy
          systems.
        </Paragraph>
      </Section>

      {/* QA Automation Engineer */}
      <Section>
        <SectionTitle>
          Software Development &amp; QA
        </SectionTitle>
        <RoleSubtitle>
          QA Automation Engineer (March 2025 – Present)
        </RoleSubtitle>

        {/* Trisus Claims Informatics */}
        <ProductTitle>
          Trisus Claims Informatics (TCI)
        </ProductTitle>

        <Paragraph>
          I initially worked on Trisus Claims Informatics
          (TCI), a healthcare analytics application that
          helps providers identify potential revenue loss,
          billing inaccuracies, and compliance risks
          through the analysis of claims and remittance data.
        </Paragraph>

        <Paragraph>
          TCI forms part of the wider <b>Trisus platform</b>,
          a cloud-based environment in which multiple
          applications share common services and resources.
          Built using <b>C# and .NET</b>, the application
          also utilised Microsoft Azure technologies,
          including <b>Cosmos DB</b> and
          <b> Azure Blob Storage</b>.
        </Paragraph>

        <Paragraph>
          Working within this environment gave me experience
          with modern application architecture, shared
          platform dependencies, automated testing, and
          CI/CD pipelines. My responsibilities focused
          primarily on QA automation, supporting software
          quality and reliability within an established
          development workflow.
        </Paragraph>

        <ProjectList>
          <ProjectItem>
            Designed, developed, and maintained automated
            tests and supporting tools in C# and .NET to
            provide regression coverage and support
            product stability.
          </ProjectItem>
          <ProjectItem>
            Investigated defects and collaborated with
            developers to identify root causes, including
            issues involving application behaviour and
            shared platform dependencies.
          </ProjectItem>
          <ProjectItem>
            Worked with developers, product managers, and
            QA engineers to refine requirements, identify
            edge cases, and validate complex healthcare
            workflows.
          </ProjectItem>
        </ProjectList>

        {/* InSight Platform */}
        <ProductTitle>
          InSight Medical Necessity &amp; InSight Audit
        </ProductTitle>

        <Paragraph>
          My team's focus subsequently shifted to two
          established Craneware products:
          <b> InSight Medical Necessity</b> and
          <b> InSight Audit</b>. Medical Necessity helps
          healthcare providers assess procedures against
          payor coverage requirements, while Audit supports
          the management of healthcare audit requests,
          documentation, and associated workflows.
        </Paragraph>

        <Paragraph>
          Unlike TCI, these applications have their roots
          in earlier generations of software development.
          Their technology stacks include a combination of
          <b> Visual Basic, C#, ASP.NET Web Forms,</b> and
          <b> SQL stored procedures</b>, alongside other
          established technologies.
        </Paragraph>

        <Paragraph>
          Working with these systems has presented a different
          set of engineering challenges, requiring an
          understanding of existing codebases, established
          business logic, and dependencies developed over
          many years. This has provided valuable experience
          in maintaining and extending mature applications
          while preserving existing functionality.
        </Paragraph>

        <Paragraph>
          The transition also coincided with a significant
          evolution in my responsibilities towards
          <b> software development</b>. I now spend the
          majority of my time working on development tasks,
          while continuing to contribute to QA automation
          and testing when required.
        </Paragraph>

        <Paragraph>
          A key focus of the team's ongoing work is the
          modernisation of the InSight applications and
          their integration into the wider Trisus platform.
          Still in its early stages, this initiative involves
          aligning authentication with shared platform
          services, introducing new APIs, and adapting
          existing functionality to support a more unified
          architecture.
        </Paragraph>

        <ProjectList>
          <ProjectItem>
            Contribute to the development and maintenance
            of application functionality using C#,
            Visual Basic, ASP.NET Web Forms, and
            SQL stored procedures.
          </ProjectItem>
          <ProjectItem>
            Investigate technical issues and implement
            changes within established codebases, taking
            account of existing business logic, dependencies,
            and regression risks.
          </ProjectItem>
          <ProjectItem>
            Collaborate with developers and other team
            members on the ongoing integration and
            modernisation of the InSight applications.
          </ProjectItem>
          <ProjectItem>
            Continue to contribute to automated testing
            and software quality, applying my QA experience
            to development work.
          </ProjectItem>
        </ProjectList>
      </Section>

      {/* Software Support Implementation Representative */}
      <Section>
        <SectionTitle>
          Implementation Scripting &amp; Integration
        </SectionTitle>
        <RoleSubtitle>
          Software Support Implementation Representative
          (Nov 2024 – Mar 2025)       
        </RoleSubtitle>
        <Paragraph>
          Worked with the <b>Trisus Integrated Scripting
          Module (ISM)</b>, developing and maintaining
          scripting solutions that integrate customers'
          Patient Accounting Systems (PAS) with the
          Trisus platform. This role combined technical
          implementation with direct customer engagement
          and requirements gathering.
        </Paragraph>

        <ProjectList>
          <ProjectItem>
            Led requirements gathering meetings with
            healthcare clients to understand PAS workflows
            and identify opportunities for automation.
          </ProjectItem>
          <ProjectItem>
            Developed and tested VBA scripts executed
            through Boston Workstation to automate charge
            management processes, including updates,
            modifications, activations, and deactivations.
          </ProjectItem>
          <ProjectItem>
            Provided remote troubleshooting, diagnostics,
            and ongoing script maintenance to ensure
            reliable operation and minimise disruption
            to customer systems.
          </ProjectItem>
        </ProjectList>
      </Section>

      {/* Software Support Representative */}
      <Section>
        <SectionTitle>
          Technical Support &amp; Troubleshooting
        </SectionTitle>
        <RoleSubtitle>
          Software Support Representative (Oct 2023 – Nov 2024)
        </RoleSubtitle>

        <Paragraph>
          Provided technical support across Craneware's
          healthcare software products, developing a broad
          understanding of their functionality, integrations,
          and use within healthcare organisations. This
          role established a strong foundation in technical
          problem-solving, customer requirements, and
          software reliability.
        </Paragraph>

        <ProjectList>
          <ProjectItem>
            Investigated and resolved complex technical
            issues across multiple products, working
            directly with customers and internal teams.
          </ProjectItem>
          <ProjectItem>
            Collaborated with development teams to
            reproduce defects, investigate application
            behaviour, and contribute to product
            improvements.
          </ProjectItem>
          <ProjectItem>
            Gained practical experience in C# and .NET
            through mentorship and exposure to professional
            development practices and coding standards.
          </ProjectItem>
        </ProjectList>
      </Section>

      {/* Technologies and Skills */}
      <Section>
        <SectionTitle>
          Technologies &amp; Engineering Experience
        </SectionTitle>

        <SkillsList>
          <b>Languages &amp; Frameworks:</b> C#, .NET,
          Visual Basic, ASP.NET Web Forms, VBA, SQL
        </SkillsList>

        <SkillsList>
          <b>Cloud &amp; Data:</b> Microsoft Azure,
          Azure Blob Storage, Azure Cosmos DB,
          SQL Stored Procedures
        </SkillsList>

        <SkillsList>
          <b>Engineering Practices:</b> Software Development,
          API Integration, QA Automation, Automated Testing,
          CI/CD, Legacy System Modernisation,
          Technical Troubleshooting, Requirements Analysis
        </SkillsList>

        <SkillsList>
          <b>Domain Knowledge:</b> Healthcare Analytics,
          Revenue Integrity, Medical Necessity,
          Audit Management, Healthcare Software Integrations
        </SkillsList>
      </Section>
    </CranewareContainer>
  );
};

// Styled Components

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

  @media (max-width: 768px) {
    margin: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: rgb(135, 145, 174);
  margin-bottom: 2rem;

  &:hover {
    color: rgb(92, 188, 177);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
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

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: rgb(92, 188, 177);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RoleSubtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: rgb(135, 145, 174);
  margin-top: -0.25rem;
  margin-bottom: 2rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(135, 145, 174);
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  color: rgb(203, 214, 244);
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const ProjectList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 1.25rem;
  margin-bottom: 2rem;
`;

const ProjectItem = styled.li`
  color: rgb(203, 214, 244);
  margin-bottom: 0.75rem;
  line-height: 1.6;
  padding-left: 0.25rem;

  &::marker {
    color: rgb(92, 188, 177);
  }
`;

const SkillsList = styled.p`
  color: rgb(203, 214, 244);
  line-height: 1.7;
  margin-bottom: 0.75rem;
`;

export default Craneware;

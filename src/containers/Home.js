
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CareerTimer from '../components/CareerTimer';

const Home = () => {
  return (
    <HomeContainer>
      <Name>Paul Cumming</Name>

      <SubHeadline>
        Software Development • C# / .NET • Quality Engineering
      </SubHeadline>

      <Message>
        I'm a software engineering professional working in
        healthcare technology at{' '}
        <CranewareLink to="/craneware">
          The Craneware Group
        </CranewareLink>
        . My career has progressed from technical support
        and QA automation into a role focused primarily
        on software development.
      </Message>

      <Message>
        I work mainly with C# and .NET, contributing to
        the development and modernisation of healthcare
        applications while drawing on my background in
        testing and automation. I'm particularly interested
        in software design, architecture, and building
        reliable, maintainable systems.
      </Message>

      <CareerTimer />

      <ActionLink to="/projects">
        Explore my projects
      </ActionLink>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
  margin: 2rem 4rem 0;
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    margin: 0;
    padding: 2rem 1.5rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Name = styled.h1`
  color: rgb(203, 214, 244);
  font-size: clamp(2.5rem, 5vw, 6rem);
  font-weight: normal;
  line-height: 1.15;
  margin: 0;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 3.5rem);
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const SubHeadline = styled.h2`
  color: rgb(92, 188, 177);
  font-size: clamp(1.2rem, 2.2vw, 2rem);
  font-weight: normal;
  line-height: 1.5;
  margin: 1rem 0 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 1rem 0 2rem;
  }
`;

const Message = styled.p`
  color: rgb(135, 145, 174);
  font-size: 1rem;
  line-height: 1.8;
  width: 100%;
  max-width: 950px;
  margin: 0 0 1.25rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

const CranewareLink = styled(Link)`
  color: rgb(92, 188, 177);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: rgb(203, 214, 244);
    text-decoration: underline;
  }
`;

const ActionLink = styled(Link)`
  color: rgb(92, 188, 177);
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  margin-top: 2rem;
  border: 2px solid rgb(92, 188, 177);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 20rem;
  border-radius: 5px;
  background-color: transparent;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: rgb(203, 214, 244);
    border-color: rgb(203, 214, 244);
  }

  @media (max-width: 768px) {
    width: 15rem;
    max-width: 100%;
  }
`;

export default Home;

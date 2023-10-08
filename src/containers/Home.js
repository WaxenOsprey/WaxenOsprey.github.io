import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Hi>Hi, my name is</Hi>
        <Name>Paul Cumming.</Name>
        <Headline>I am a Junior Software Developer.</Headline>
        <Message>
          I'm a trained Software Engineer who has recently made a career change from heritage and tourism to technology. Currently, I'm focused on gaining experience in the tech sector working with the Software Support Team at
          <span>
            <Craneware href='https://www.thecranewaregroup.com/'> The Craneware Group.</Craneware>
          </span>
        </Message>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <ActionButton>
            Check out my projects!
          </ActionButton>
        </Link>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div.attrs({ 'data-display-name': 'HomeContainer' })`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 4rem;
  margin-right: 4rem;
  margin-bottom: 0;
  /* width: 100vw;
  height: 100vh; */


  @media (max-width: 768px) {
    margin: 0;
    padding: 2rem; /* Add padding to center content vertically */
    justify-content: center;
    align-items: center;
    text-align: center; /* Center text within the container */
    /* max-width: 100vh; */

  }
`;

const Hi = styled.p.attrs({ 'data-display-name': 'Hi' })`
  color: rgb(92, 188, 177);
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

const Name = styled.p.attrs({ 'data-display-name': 'Name' })`
  color: rgb(203, 214, 244);
  font-size: 6rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 4rem; 
    margin-top: 2rem;
    margin-bottom: 2rem;


  }
`;

const Headline = styled.p.attrs({ 'data-display-name': 'Headline' })`
  color: rgb(135, 145, 174);
  font-size: 4rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }
`;

const Message = styled.p.attrs({ 'data-display-name': 'Message' })`
  color: rgb(135, 145, 174);
  font-size: 1rem;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  width: 75%;

  @media (max-width: 768px) {
    /* width: 75%;  */
    font-size: 0.9rem; 
  }
`;

const Craneware = styled.a.attrs({ 'data-display-name': 'Craneware' })`
  color: rgb(92, 188, 177);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: rgb(203, 214, 244);
  }
`;

const ActionButton = styled.button.attrs({ 'data-display-name': 'ActionButton' })`
  color: rgb(92, 188, 177);
  font-size: 1rem;
  text-decoration: none;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  line-height: 1.5;
  border: 2px solid rgb(92, 188, 177);
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  height: 3rem;
  width: 20rem;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 15rem; 
  }

  &:hover {
    color: rgb(203, 214, 244);
    border: 2px solid rgb(203, 214, 244);
    text-decoration: none;
  }
`;


export default Home;

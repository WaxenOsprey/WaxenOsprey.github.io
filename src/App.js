import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import projectsData from './data/projectsData';
import './App.css';
import MobileNavBar from './components/MobileNavBar';


function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
    console.log(projectsData);
  }
  ,[]);

  return (
    <>
        <MainContainer>
          <NavBar/>
          <MobileNavBar/>
          <AppContainer>
            <SideBar/>
            <Routes>
              <Route path="/" element={<Home />} index /> 
              <Route path="/about" element={<About/>}/> 
              <Route path="/projects" element={<Projects projects={projects}/>} />
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </AppContainer>
          <Footer/>
        </MainContainer>

    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100vh;
  /* overflow-x: hidden; */

  @media (max-width: 768px) {
    margin: 0;
    /* overflow-x: visible; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    /* flex-grow: 1; */
  }
  
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  flex-grow: 1;

  @media (max-width: 768px) {
    width: 100%;
    /* overflow-x: visible; */
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    height: 100vh;
  }

`;


export default App;

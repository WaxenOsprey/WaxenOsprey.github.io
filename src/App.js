import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import NavBar from './components/NavBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import projectsData from '../src/components/ProjectsData';
import './App.css';





function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
    console.log(projectsData);
  }
  ,[]);

  return (
    <>
        <NavBar/>
        <AppContainer>
          <SideBar/>
          <Routes>
            <Route path="/" element={<Home />} index /> 
            <Route path="/about" element={<About/>}/> 
            <Route path="/projects" element={<Projects projects={projects}/>} />
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8rem;
`;


export default App;

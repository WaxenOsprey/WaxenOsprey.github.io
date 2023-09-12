import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import YouTubePlayer from '../components/YouTubePlayer';


const Projects = ({ projects }) => {


    useEffect(() => {
        setSelectedProject(projects[0]);

    }
    ,[]);

    const [selectedProject, setSelectedProject] = useState(null);

    const handleClick = (project) => {
        setSelectedProject(project);
    }

    const ColouredText = styled.span`
        color: rgb(92,188,177);`

    const CustomRenderer = {
        span: (props) => <ColouredText>{props.children}</ColouredText>,
    };

    return (
        <ProjectsContainer>
            <Title>Projects</Title>
            <Message>Select a project:</Message>

            <ProjectsWrapper>
                <SelectedProjectContainer>
                    {selectedProject && (
                        <>
                            <ProjectTitle>{selectedProject.name}</ProjectTitle>
                            <ProjectIntro>Introduce the project</ProjectIntro>
                            
                            <VideoContainer>
                                <YouTubePlayer videoId={selectedProject.video} /> 
                            </VideoContainer>

                            <ProjectOverViewContainer>
                                <ProjectDetailsWrapper>
                                    <ProjectHeading>{selectedProject.sections[0].title}</ProjectHeading>
                                    <ProjectContent>
                                        <ReactMarkdown>
                                            {selectedProject.sections[0].content}
                                        </ReactMarkdown>
                                    </ProjectContent>
                                </ProjectDetailsWrapper>

                            </ProjectOverViewContainer>

                            <ProjectOverViewContainer>
                                
                                <ProjectDetailsWrapper>
                                    <ProjectHeading>{selectedProject.sections[1].title}</ProjectHeading>
                                    <ProjectContent>
                                        <ReactMarkdown source={selectedProject.sections[1].content} renderers={CustomRenderer} >{selectedProject.sections[1].content}</ReactMarkdown>
                                    </ProjectContent>
                                </ProjectDetailsWrapper>

                            </ProjectOverViewContainer>

                            <ProjectOverViewContainer>
                                <ProjectDetailsWrapper>
                                    <ProjectHeading>{selectedProject.sections[2].title}</ProjectHeading>
                                    <Logos>
                                        {selectedProject.logos.map((logo, index) => (
                                            <Logo key={index} src={logo.src} title={logo.title} alt="logo" />
                                        ))}
                                    </Logos>


                                    <ProjectContent>
                                        <ReactMarkdown>
                                            {selectedProject.sections[2].content}
                                        </ReactMarkdown>
                                    </ProjectContent>
                                </ProjectDetailsWrapper>

                            </ProjectOverViewContainer>
                            <GitHubLink>GitHub Repo</GitHubLink>
                        </>
                    )}
                </SelectedProjectContainer>

                <ProjectsMenu>
                    {projects.map((project) => (
                        <div key={project.id} onClick={() => handleClick(project)}>
                            <MenuItem isSelected={project.name === (selectedProject && selectedProject.name)}>
                                {project.name}
                            </MenuItem>
                        </div>
                    ))}
                </ProjectsMenu>
            </ProjectsWrapper>
        </ProjectsContainer>
    );
}
 
const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* margin: 2rem; */
    margin-left: 8rem;
    margin-right: 8rem;
    width: 100%;
`;

const Title = styled.p`
    color: rgb(203,214,244);
    font-size: 4rem; 
    margin: 0;
    padding: 0;
`

const ProjectIntro = styled.p`
    color: rgb(92,188,177);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
`

const ProjectTitle = styled.p`
    color: rgb(135,145,174);
    font-size: 4rem;
    margin: 0;
    padding: 0;
`

const Message = styled.p`
    color: rgb(92,188,177);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    border-top: 2px solid rgb(92,188,177);
    border-right: 2px solid rgb(92,188,177);
    padding-top: 1rem;
    text-align: left;
`

const MenuItem = styled.p`
    font-size: 2rem;
    margin-bottom: 10px;
    color: ${props => props.isSelected ? 'rgb(92,188,177)' : 'rgb(135,145,174)'};
    cursor: pointer;

    &:hover {
        color: rgb(203,214,244);
    }
    &:active {
        color: rgb(92,188,177);
    }
`
const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: row;

    margin-top: 2rem;
`


const ProjectsMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 25%;
    padding: 0;
    list-style-type: none;  
    margin-left: auto;
    
    `

const SelectedProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-left: 4rem;
    
    `

const ProjectHeading = styled.p`
    color: rgb(135,145,174)
    ;`

const ProjectContent = styled.p`
    color: rgb(203,214,244)
    ;`

const ProjectOverViewContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem;
    justify-content: center;
    
    `

const ProjectDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 75%;
    margin-right: 2rem;
    `;


const GitHubLink = styled.a`
    color: rgb(92,188,177);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    border: 2px solid rgb(92,188,177);
    display: flex;
    justify-content: center;
    background-color: transparent;
    align-items: center;
    height: 3rem;
    width: 20rem;
    border-radius: 1rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        border: 2px solid rgb(203,214,244);
        color: rgb(203,214,244);
    }
    `

const VideoContainer = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
border: 2px solid rgb(92,188,177);
width: 50%;
height: 20rem;
`;


const Logos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
    background-color: rgba(92,188,177, 0.6);
    width: 100%;
    padding: 2rem;
`;

const Logo = styled.img`
    height: 5rem;
    width: 5rem;
    margin-right: 2rem;

`;


export default Projects;
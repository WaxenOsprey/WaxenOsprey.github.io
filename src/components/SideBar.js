import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SideBar = () => {

    const email = 'paulsamuelcummingdev@gmail.com';


    return ( 
        <>
            <SideBarContainer>
                <SocialsList>
                    <SocialsListItem>
                        <SocialLink href='https://www.linkedin.com/in/paulsamuelcummingdev/' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#5cbcb1", height: "3rem", margin: "1rem" }} />
                        </SocialLink>
                    </SocialsListItem>
                    <SocialsListItem>
                        <SocialLink href='https://github.com/WaxenOsprey' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} style={{ color: "#5cbcb1", height: "3rem", margin: "1rem"  }} />
                        </SocialLink>
                    </SocialsListItem>
                    <SocialsListItem>
                        <SocialLink href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#5cbcb1", height: "3rem", margin: "1rem"  }} />
                        </SocialLink>
                    </SocialsListItem>

                </SocialsList>
            </SideBarContainer>
        </>
     );
}

const SideBarContainer = styled.div`
  position: fixed;
  top: 50%; /* Center vertically */
  transform: translateY(-50%); /* Center vertically */
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center; 
  list-style-type: none;
  padding: 0;
  margin-left: 2rem;
`;

const SocialsList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: end;
    list-style-type: none;
    margin-top: 20rem;
    padding: 0;
`;

const SocialsListItem = styled.li`
    color: rgb(203,214,244);
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    display: flex;
    text-decoration: none;
    margin-left: 2rem;
    margin-right: 2rem;
    align-items: center;
    position: relative;
    &:hover {
        border-left: 2px solid rgb(92,188,177);
    }
`;

const SocialLink = styled.a`
    color: rgb(203,214,244);
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    text-decoration: none;
`;

 
export default SideBar;
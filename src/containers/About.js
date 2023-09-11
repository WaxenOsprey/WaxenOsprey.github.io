import styled from 'styled-components';
import profilePic from '../assets/pic5.jpg'

const About = () => {
    return ( 
    <>

            <AboutContainer>
                <Title>About</Title>
                <Message>This is the about page</Message>
                <ProfilePic src={profilePic} alt="profile picture"/>
                <AboutSection>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elit lacus, bibendum vitae neque ut, commodo sodales nibh. Sed aliquet fermentum ex sit amet iaculis. Proin mattis nunc metus, congue luctus quam varius ut. Cras dapibus in odio non aliquet. Suspendisse nisl mauris, aliquet sit amet maximus sit amet, tristique a ante. Proin rutrum blandit sodales. Sed accumsan vestibulum urna, a congue enim sollicitudin egestas. Integer eu ultrices diam, id rutrum lectus. Nulla vitae nibh ac dolor fermentum mollis. Sed tincidunt ultrices arcu nec vestibulum. Aliquam consectetur eu dolor quis sodales. Phasellus cursus et neque a porta. Donec vel scelerisque urna, a auctor justo. Cras sit amet magna eget tellus bibendum vehicula. In volutpat justo id sem porttitor, non pulvinar justo congue. Aliquam facilisis luctus nunc, nec aliquet nisi semper sit amet.

                </AboutSection>
                <AboutSection>
                Etiam ut justo maximus, pharetra orci mattis, ornare ipsum. Fusce vehicula, risus nec gravida ullamcorper, metus felis tempor risus, eget convallis massa velit sed lorem. Mauris et felis mauris. Vivamus dictum sem augue, sed mollis enim aliquam sed. Nulla id pellentesque lacus, quis fringilla nisl. Duis sagittis tellus arcu, ut suscipit dolor lobortis in. Donec massa dolor, congue quis urna ut, ornare varius eros. Morbi euismod nunc ut massa aliquet, eget iaculis lectus suscipit. Duis faucibus quam eros, non aliquet nulla consectetur sodales.

                </AboutSection>

                <AboutSection>
                Nunc diam quam, gravida at nunc sit amet, dapibus vulputate urna. Quisque quam nisi, semper in ex quis, pharetra laoreet magna. Nunc mattis euismod leo, et maximus massa gravida vel. Maecenas maximus nisl est, et elementum justo congue vitae. Donec at efficitur risus. Nulla non arcu ultrices, molestie orci eget, iaculis ante. Donec ultricies tristique arcu, sit amet porttitor orci pharetra vitae. Vestibulum mollis faucibus varius. Donec commodo augue molestie ante molestie sodales. Aliquam euismod accumsan lectus, quis dictum nisi dapibus sit amet. Duis vel ultricies nunc.
                </AboutSection>
            </AboutContainer>
        

        
    </> );
}

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8rem;
    width: 100%;
`;

const Title = styled.p`
    color: rgb(203,214,244);
    font-size: 4rem; 
    margin: 0;
    padding: 0;
;`

const Message = styled.p`
    color: rgb(135,145,174);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
`

const ProfilePic = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    margin: 2rem;
`;
 
const AboutSection = styled.p`
    color: rgb(203,214,244);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
`

export default About;
import {Container, Row, Col} from 'react-bootstrap'
import NavBarComponent from "./NavBarComponent";

const AboutComponent = () => {
  return (
    <div id="about">
    <NavBarComponent/>
    <Container fluid className="aboutsection vh-100">
        <Row className="pt-5 d-flex align-items-center">
          <Col className="ml-5 mb-3 col-12 col-md-5">
            <img className="img-fluid portrait" src="croppedprofessional.jpg" alt="headshot of Veronica Adler"/>
          </Col>
          <Col>
            <p className="description">I still remember the first time I really understood a programming loop. I'd been playing
Lightbot Hour, my mind bending for days in mental gymnastics. And then it came to me: like
a tool working away at a rhythmic interval. It had a functional power, simplicity and beauty
that fascinated me. <br></br><br></br>

    After studying the basics of programming in Python, I enrolled in Nucamp Coding Bootcamp in 2020 to develop my skills as a MERN stack developer.  During my time at Nucamp, I realized that I enjoyed the visually driven nature of front end development.  I enjoyed telling a story through code, and thinking about the most effective way to engage users. <br></br><br></br>

    Currently, I'm seeking an entry-level role, apprenticeship, or internship where I can utilize my skills in Javascript, HTML and CSS.  I have built several projects in React.js, and have a passion for React's modular functionality.  <br></br><br></br>
    
    From my experiences as a Licensed Massage Therapist and with a BA in English Literature, I bring strong skills in communication, a deep sense of empathy with the end user, as well as a deep intellectual curiousity that fuels my interest in technology.      
</p>
          </Col>
        </Row>
    </Container>
    </div>
  );
};

export default AboutComponent;

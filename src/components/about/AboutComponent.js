import NavBarComponent from "./NavBarComponent";
import {Container, Row, Col} from 'react-bootstrap'

const AboutComponent = () => {
  return (
    <div className="aboutsection" id="about">
      <NavBarComponent />
      <Container fluid className="vh-100">
        <Row className="pt-5">
          <Col className="ml-5">
            <img className="img-fluid portrait" src="croppedprofessional.jpg" alt="headshot of Veronica Adler"/>
          </Col>
          <Col>
            <h1 className="description">I'm a software developer whose passionate about design, UX, and diversity in technology. A recent honors graduate of Nucamp Coding Bootcamp's Full MERN stack program, I'm experienced in using HTML, CSS, and Javascript (React.js) to bring web and mobile applications to life.</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutComponent;

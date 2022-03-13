import { Button, Container, Row, Col} from 'react-bootstrap'
import FlyingLottie from './FlyingLottieComponent'

const HomeComponent = () => {

    return (
        <Container className="home text-center">
            <div className="vh-100">
         <Row className="align-items-center">
         <Row className="pb-5">
                <Col>
                <FlyingLottie />
                </Col>
            </Row>
            <Row>
             <Col>
            <h1 className="display-2">Hi! I'm <span className="bizname">Veronica Adler</span>,</h1>
            <h2 className="pb-0"> a front end web developer.</h2>
            <Button className="homebtn btn-light">See My Projects</Button>
            </Col>
            </Row>
            </Row>
            </div>
            
        </Container>
      );
}
 
export default HomeComponent;
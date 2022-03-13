import { Button, Container, Row, Col} from 'react-bootstrap'
import MedLottie from './MeditateComponent'

const HomeComponent = () => {

    return (
        <Container className="home">
         <Row className="vh-100 align-items-center">
            <Col>
            <MedLottie />
            </Col>
            <Col className="hometitle pt-5 align-items-center">
            <h1 className="pb-0 pt-5">Hi, I'm Veronica Adler,</h1>
            <h2 className="pb-3"><span className="bizname"> a front end developer.</span></h2>
            <Button className="homebtn">View My Projects</Button>
            </Col>
            </Row>
            
        </Container>
      );
}
 
export default HomeComponent;
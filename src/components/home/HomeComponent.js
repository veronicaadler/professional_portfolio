import { Button, Container, Row, Col} from 'react-bootstrap'
import FlyingLottie from './FlyingLottieComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const HomeComponent = () => {


    const [iconChoice, setIconChoice ] = useState(true)
    console.log(iconChoice)

    const handleMouse = () => {
        setIconChoice(!iconChoice)
    }


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
            <h2 className="pb-0"> a front end web developer. </h2>
            <Button role="button" onMouseEnter={handleMouse} onMouseLeave={handleMouse} className="homebtn btn-light"><span>See My Projects </span>  
                {iconChoice && <FontAwesomeIcon icon={faArrowRight} />}
                {!iconChoice && <FontAwesomeIcon icon={faArrowDown} />}
            </Button>
            </Col>
            </Row>
            </Row>
            </div>
            
        </Container>
      );
}
 
export default HomeComponent;
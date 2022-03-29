import { Button, Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const HomeComponent = () => {


    const [iconChoice, setIconChoice ] = useState(true)

    const handleMouse = () => {
        setIconChoice(!iconChoice)
    }


    return (
        <Container fluid className="home text-center vh-100 d-flex align-items-center justify-content-end" id="home">
            <Row>
             <Col>
            <h1 className="display-2">Hi! I'm Veronica Adler,</h1>
            <h2 className="mb-4"> a front end web developer. </h2>
            <a href="#about">
            <Button role="button" onMouseEnter={handleMouse} onMouseLeave={handleMouse} className="homebtn btn-light"><span>See My Projects </span>  
                {iconChoice && <FontAwesomeIcon icon={faArrowRight} />}
                {!iconChoice && <FontAwesomeIcon icon={faArrowDown} />}
            </Button>
            </a>
            </Col>
            </Row>
        </Container>
      );
}
 
export default HomeComponent;
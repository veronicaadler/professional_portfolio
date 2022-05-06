import { Navbar, Nav, Container} from 'react-bootstrap';

const NavBarComponent = () => {
    return (
        <div>
        <Navbar sticky="top" bg="dark" variant="dark" className="navbar">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
      );
}
 
export default NavBarComponent;
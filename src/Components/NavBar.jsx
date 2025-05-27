import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navegacion = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Container>
          <Navbar.Brand as={Link} to="/Saludo">Ultimate Gamer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
              <Nav.Link as={Link} to="/Inicio">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
              
              <Nav.Link as={Link} to="/ListaDeJuegos">Tienda De Juegos Digitales</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default Navegacion;
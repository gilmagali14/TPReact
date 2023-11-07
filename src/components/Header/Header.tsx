import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
    return(
        <>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand onClick={() => navigate('#home')}>HHOLAAAAAAAA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                         <Nav.Link onClick={() => navigate('#features')}>Features</Nav.Link>
                         <Nav.Link onClick={() => navigate('#pricing')}>Pricing</Nav.Link>
                         <NavDropdown
                         title="Dropdown"
                         onClick={() => navigate('#Dropdown')} // Manejar el evento onClick
                         id="collasible-nav-dropdown">
                      
                            <NavDropdown.Item onClick={() => navigate('##action/3.1')} >Action</NavDropdown.Item>
                             <NavDropdown.Item onClick= {() => navigate('##action/3.2')}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('##action/3.3')}>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate('##action/3.4')}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => navigate('#deets/3.1')}>More deets</Nav.Link>
            <Nav.Link eventKey={2} onClick={() => navigate('#memes')}>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Header;

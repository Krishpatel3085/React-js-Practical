import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




export default function Header() {
   
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Radhe Krishna</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link ><Link to="/" id='css'> Home</Link></Nav.Link>

                            <Nav.Link >About</Nav.Link>

                            <NavDropdown title="Pages" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">  Another action </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">  Something else here  </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link  > <Link to="/ContectPage" id='css'>Contect</Link> </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"

                            />
                            {/* <Button variant="outline-success">Search</Button> */}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          
        </>
    )
}


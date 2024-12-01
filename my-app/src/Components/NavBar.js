import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Photos/Logo.png';
import '../App.css';



const NavBar = () => {
    return (
        <Navbar className="navbar navbar-dark-green" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img height="40px" width="30px" src={Logo}></img>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/add">Add Animal</Nav.Link>
                    <Nav.Link href="/view">Manage Animals</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
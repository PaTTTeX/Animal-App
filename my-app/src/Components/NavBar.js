import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Photos/Logo.png';



const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img height="40px" width="30px" src={Logo}></img>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                    <Nav.Link href="/read">Read</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
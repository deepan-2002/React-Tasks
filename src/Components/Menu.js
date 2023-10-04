import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './logo512.png'

function Menu() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="/"><img src='./logo512.png' width={'30px'}></img></Navbar.Brand>
                    <Nav className="m-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/congrats">Congrats Card</Nav.Link>
                        <Nav.Link href="/superover">Super Over</Nav.Link>
                        <Nav.Link href="/socialbuttons">Social Buttons</Nav.Link>
                        <Nav.Link href="/notification">Notifications</Nav.Link>
                        <Nav.Link href="/logindesign">Login Design</Nav.Link>
                        <Nav.Link href="/tech">Technology Cards</Nav.Link>
                        <Nav.Link href="/hook">Hook</Nav.Link>
                        <Nav.Link href="/fruit">Fruits</Nav.Link>
                        <Nav.Link href="/feedback">Feedback</Nav.Link>
                        <Nav.Link href="/datefunction">Date function</Nav.Link>
                        <Nav.Link href="/fetch">Fetch</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;
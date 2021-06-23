import {Navbar, Nav, Button, Container} from 'react-bootstrap/';
import {DoorOpen, DoorClosed, AspectRatio, PlusCircle} from 'react-bootstrap-icons';

function Navigation(props){
    return(
        <Container fluid>
            <Navbar bg="warning" fixed="top">
                <AspectRatio className="mr-2" size= "30"/>
                <Navbar.Brand href="">MemeGenerator</Navbar.Brand>
                <Nav className="ml-auto">
                    <Button variant="success">
                        <PlusCircle className="mr-2" size="30"/>
                         Create new meme
                    </Button>
                    <Button variant="success">
                        <DoorOpen className="mr-2" size="30"/>
                         Login
                    </Button>
                    <Button variant="danger">
                        <DoorClosed className="mr-2" size="30"/>
                         Logout
                    </Button>
                    <Navbar.Brand href="">Welcome Tizio!</Navbar.Brand>
                </Nav>
            </Navbar>
        </Container>
    )
}

export {Navigation};
import {Navbar, Nav, Button} from 'react-bootstrap/';
import {DoorOpen, AspectRatio} from 'react-bootstrap-icons';

function Navigation(props){
    return(
        <>
            <Navbar bg="warning" fixed="top">
                <AspectRatio className="mr-2" size= "30"/>
                <Navbar.Brand href="">MemeGenerator</Navbar.Brand>
                <Nav className="mr-auto">
                    <Button variant="success">
                        <DoorOpen className="mr-2" size="30"/>
                         Login
                    </Button>
                </Nav>
            </Navbar>
        </>
    )
}

export {Navigation};
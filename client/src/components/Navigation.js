import {Navbar, Nav} from 'react-bootstrap/';

function Navigation(props){
    return(
        <>
            <Navbar bg="warning" variant="dark" fixed="top">
                <Navbar.Brand href="">MemeGenerator</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="">Login</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export {Navigation};
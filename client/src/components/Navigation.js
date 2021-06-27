import {Navbar, Nav, Button} from 'react-bootstrap/';
import {DoorOpen, DoorClosed, AspectRatio, PlusCircle} from 'react-bootstrap-icons';
import API from '../API';

function Navigation(props){

    const logout = async () => {
        await API.logout();
        props.setLoggedIn(false);
    }

    return(
        <Navbar bg="primary" variant="dark" sticky="top">
            <AspectRatio color="white" className="mr-2" size= "30"/>
            <Navbar.Brand href="">MemeGenerator</Navbar.Brand>
            <Nav className="ml-auto">
               { props.loggedIn ? 
                    <>
                    <Navbar.Brand>
                        {'Welcome ' + props.userInfo.name +"!"}
                    </Navbar.Brand>
                    <Button className="mr-2" variant="success">
                        <PlusCircle className="mr-2" size="30"/>
                        Create new meme
                    </Button>
                    <Button variant="danger" onClick={logout}>
                        <DoorClosed className="mr-2" size="30"/>
                            Logout
                    </Button>
                    </>
                 : 
                <Button variant="success" onClick={() => props.setShowLoginModal(true)}>
                    <DoorOpen className="mr-2" size="30"/>
                    Login
                </Button>
                }
            </Nav>
        </Navbar>
    )
}

export {Navigation};
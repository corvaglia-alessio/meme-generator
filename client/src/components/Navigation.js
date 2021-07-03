import {Navbar, Nav, Button, Image} from 'react-bootstrap/';
import {DoorOpen, DoorClosed, PlusCircle, House} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';
import img from '../logo.ico'
import API from '../API';

function Navigation(props){

    const logout = async () => {
        await API.logout();
        props.setLoggedIn(false);
    }
    return( 
        <Navbar bg="primary" variant="dark" sticky="top">
            <Link to="/">
                <Image src={img}></Image>
                <Navbar.Brand className="ml-2">MemeGenerator</Navbar.Brand>
            </Link>
            <Nav className="ml-auto">
               { props.loggedIn ? 
                    <>
                    <Navbar.Brand>
                        {'Welcome ' + props.userInfo.name +"!"}
                    </Navbar.Brand>
                    <Link to="/">
                        <Button className="mr-2" variant="warning">
                            <House size="30" className="mr-2"/>
                            Home
                        </Button>
                    </Link>
                    <Link to="/imgchooser">
                        <Button className="mr-2" variant="success">
                            <PlusCircle className="mr-2" size="30"/>
                            New meme
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button variant="danger" onClick={logout}>
                            <DoorClosed className="mr-2" size="30"/>
                            Logout
                        </Button>
                    </Link>
                    </>
                 :
                 <>
                    <Link to="/">
                        <Button className="mr-2" variant="warning">
                            <House size="30" className="mr-2"/>
                            Home
                        </Button>
                    </Link>
                    <Button variant="success" onClick={() => props.setShowLoginModal(true)}>
                        <DoorOpen className="mr-2" size="30"/>
                        Login
                    </Button>
                 </> 

                }
            </Nav>
        </Navbar>
    )
}

export {Navigation};
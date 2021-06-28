import {Navigation} from './components/Navigation.js'
import {LoginModal} from './components/LoginModal.js'
import {MemeEditor} from './components/MemeEditor.js'
import {MemeViewer} from './components/MemeViewer.js'
import {MemeDetails} from './components/MemeDetails.js'
import { ImageChooser } from './components/ImageChooser.js'
import { MemeChooser } from './components/MemeChooser.js'
import {useState, useEffect} from 'react'
import {Row, Col, Container} from 'react-bootstrap/'
import './App.css';
import API from './API';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [memes, setMemes] = useState({});

  return (
    <>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setShowLoginModal={setShowLoginModal}/>
      <LoginModal show={showLoginModal} setLoggedIn={setLoggedIn} setUserInfo={setUserInfo} setShowLoginModal={setShowLoginModal} onHide={() => setShowLoginModal(false)}/>
      <Container fluid>
         <MemeChooser/>
      </Container>
    </>
  );
}

export default App;

/*

*/
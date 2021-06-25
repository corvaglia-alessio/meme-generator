import {Navigation} from './components/Navigation.js'
import {LoginModal} from './components/LoginModal.js'
import {MemeEditor} from './components/MemeEditor.js'
import {MemeViewer} from './components/MemeViewer.js'
import {MemeDetails} from './components/MemeDetails.js'
import { ImageChooser } from './components/ImageChooser.js'
import { MemeChooser } from './components/MemeChooser.js'
import {useState} from 'react'
import {Row, Col, Container} from 'react-bootstrap/'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <>
      <Navigation setShowLoginModal={setShowLoginModal}/>
      <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)}/>
      <Container fluid>
        <MemeChooser/>
      </Container>
    </>
  );
}

export default App;

/*
        <Row>
          <Col>
            <MemeViewer/>
          </Col>
          <Col className="mt-3">
            <MemeDetails/>
          </Col>
        </Row>
*/
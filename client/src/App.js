import {Navigation} from './components/Navigation.js'
import {LoginModal} from './components/LoginModal.js'
import {MemeEditor} from './components/MemeEditor.js'
import {MemeViewer} from './components/MemeViewer.js'
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
        <Row>
          <Col>
            <MemeViewer/>
          </Col>
          <Col className="mt-3">
            <MemeEditor/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

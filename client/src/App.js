import {Navigation} from './components/Navigation.js'
import {LoginModal} from './components/LoginModal.js'
import {MemeEditor} from './components/MemeEditor.js'
import {MemeViewer} from './components/MemeViewer.js'
import { ImageChooser } from './components/ImageChooser.js'
import { MemeChooser } from './components/MemeChooser.js'
import {MemeDetails} from './components/MemeDetails'
import {useState, useEffect} from 'react'
import {Row, Col, Container} from 'react-bootstrap/'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import API from './API';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [memes, setMemes] = useState([]);

  useEffect(() => async () => {
      if (loggedIn) {
        const m = await API.getAllMemes();
        setMemes(m);
      } else {
        const m = await API.getPublicMemes();
        setMemes(m);
      }
    }, [loggedIn, memes.length]);

  return (
    <Router>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setShowLoginModal={setShowLoginModal}/>
      <LoginModal show={showLoginModal} setLoggedIn={setLoggedIn} setUserInfo={setUserInfo} setShowLoginModal={setShowLoginModal} onHide={() => setShowLoginModal(false)}/>
      <Container fluid>
        <Switch>
          <Route path="/view">
            <Row>
              <Col>
                <MemeViewer/>
              </Col>
              <Col>
                <MemeDetails/>
              </Col>
            </Row>
          </Route>
          <Route path="/editor">
            <Row>
              <Col>
                <MemeViewer/>
              </Col>
              <Col>
                <MemeEditor/>
              </Col>
            </Row>
          </Route>
          <Route path="/" exact>
            <MemeChooser memes={memes} loggedIn={loggedIn} userInfo={userInfo}/>
          </Route>
          <Route>
            <h1>404: Not Found!</h1>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
import {Navigation} from './components/Navigation.js'
import {LoginModal} from './components/LoginModal.js'
import {MemeEditor} from './components/MemeEditor.js'
import { ImageChooser } from './components/ImageChooser.js'
import { MemeChooser } from './components/MemeChooser.js'
import {MemeDetails} from './components/MemeDetails'
import {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap/'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import API from './API';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [memes, setMemes] = useState([]);
  const [images, setImages] = useState([]);
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await API.getUserInfo();
        setUserInfo(user);
        setLoggedIn(true);
      } catch (err) {
        console.log(err.error);
      }
    };
    checkAuth();
  }, []);

  //load memes every time login and logout operations are performed
  useEffect(() => {
    const getMemes = async () => {
      if(loggedIn){
        return await API.getAllMemes();
      }
      else{
        return await API.getPublicMemes();
      }
    } 

    getMemes().then((me) => {setMemes(me)});
  }, [loggedIn]);


  //load images and fonts only at mount time
  useEffect(() => {
    const getImg = async () => {
      return await API.getImages();
    }
    const getFnts = async () => {
      return await API.getFonts();
    }
    getImg().then((im) => {setImages(im)});
    getFnts().then((fs) => {setFonts(fs)});
  }, []);

  return (
    <Router>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setShowLoginModal={setShowLoginModal}/>
      <LoginModal show={showLoginModal} setLoggedIn={setLoggedIn} setUserInfo={setUserInfo} setShowLoginModal={setShowLoginModal} onHide={() => setShowLoginModal(false)}/>
      <Container fluid>
        <Switch>
          <Route path="/view">
            <MemeDetails/>
          </Route>
          <Route path="/imgchooser">
            <ImageChooser imgs={images}/>
          </Route>
          <Route path="/editor">
            <MemeEditor fonts={fonts}/>
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
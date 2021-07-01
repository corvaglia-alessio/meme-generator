import {Navigation} from './components/Navigation.js'
import {LoginModal} from './components/LoginModal.js'
import {MemeEditor} from './components/MemeEditor.js'
import { ImageChooser } from './components/ImageChooser.js'
import { MemeChooser } from './components/MemeChooser.js'
import {MemeDetails} from './components/MemeDetails'
import {useState, useEffect} from 'react'
import {Container, Alert} from 'react-bootstrap/'
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
          <Route path="/view/:id" render={({match}) => <MemeDetails loggedIn={loggedIn} userInfo={userInfo} img={images.find(i => i.id === (memes.find(m => m.id === parseInt(match.params.id)).id))} meme={memes.find(m => m.id === parseInt(match.params.id))} fonts={fonts}/>}/>
          <Route path="/imgchooser" render={() => loggedIn ? <ImageChooser imgs={images}/> : <Alert variant="danger" className="m-3">You are not logged in!</Alert>}/>
          <Route path="/editor/:id" render={({match}) => loggedIn ? <MemeEditor img={images.find(i => i.id === parseInt(match.params.id))} fonts={fonts} meme=""/> : <Alert variant="danger" className="m-3">You are not logged in!</Alert>}/>
          <Route path="/copy/:id" render={({match}) => loggedIn ? <MemeEditor img={images.find(i => i.id === memes.find(m => m.id === parseInt(match.params.id).id))} fonts={fonts} meme={memes.find(m => m.id === parseInt(match.params.id))}/> : <Alert variant="danger" className="m-3">You are not logged in!</Alert>}/>
          <Route path="/" exact render={() => <MemeChooser memes={memes} loggedIn={loggedIn} userInfo={userInfo}/> }/>
          <Route render={() => <Alert variant="danger" className="m-3">Error 404: NOT FOUND!</Alert> }/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
import {Navigation} from './components/Navigation.js'
import {LoginModal} from './components/LoginModal.js'
import {MemeEditor} from './components/MemeEditor.js'
import { ImageChooser } from './components/ImageChooser.js'
import { MemeChooser } from './components/MemeChooser.js'
import {MemeDetails} from './components/MemeDetails'
import {Notify} from './components/Notify'
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
  const [dirty, setDirty] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

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

  //load memes every time login and logout operations are performed and at each dirty SOLVE THIS ISSUE!
  useEffect(() => {
    const getMemes = async () => {
      if(loggedIn){
        return await API.getAllMemes();
      }
      else{
        return await API.getPublicMemes();
      }
    }

    if(dirty) //show the message of success only when a meme is added or removed
      setShowMsg(true);

    setDirty(false);
    getMemes().then((me) => {me.sort((first, second) => second.id-first.id); setMemes(me)}); //put memes from the most recent to the least
  }, [loggedIn, dirty]);


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
        <Notify variant="success" show={showMsg} setShow={setShowMsg} msg="Operation performed successfully!"/>
        <Switch>
          <Route path="/view/:id" render={({match}) => <MemeDetails setDirty={setDirty} loggedIn={loggedIn} userInfo={userInfo} img={images.find(i => i.id === (memes.find(m => m.id === parseInt(match.params.id)).imageid))} meme={memes.find(m => m.id === parseInt(match.params.id))} fonts={fonts}/>}/>
          <Route path="/imgchooser" render={() => loggedIn ? <ImageChooser imgs={images}/> : <Notify variant="danger" show={showMsg} setShow={setShowMsg} msg="You are not logged in!"/>}/>
          <Route path="/editor/:id" render={({match}) => loggedIn ? <MemeEditor setDirty={setDirty} userInfo={userInfo} img={images.find(i => i.id === parseInt(match.params.id))} fonts={fonts} meme="0"/> : <Notify variant="danger" show={showMsg} setShow={setShowMsg} msg="You are not logged in!"/>}/>
          <Route path="/copy/:id" render={({match}) => loggedIn ? <MemeEditor setDirty={setDirty} userInfo={userInfo} img={images.find(i => i.id === (memes.find(m => m.id === parseInt(match.params.id)).imageid))} fonts={fonts} meme={memes.find(m => m.id === parseInt(match.params.id))}/> : <Notify variant="danger" show={showMsg} setShow={setShowMsg} msg="You are not logged in!"/>}/>
          <Route path="/" exact render={() => <MemeChooser setDirty={setDirty} memes={memes} loggedIn={loggedIn} userInfo={userInfo}/> }/>
          <Route render={() => <Notify variant="danger" show={showMsg} setShow={setShowMsg} msg="Error 404: Not Found!"/>}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
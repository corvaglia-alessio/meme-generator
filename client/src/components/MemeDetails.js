import {Row, Col, Container} from 'react-bootstrap/';
import {MemeViewer} from './MemeViewer.js'
import {MemeCard} from './MemeCard.js'


function MemeDetails(props) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MemeViewer img={props.img} text1={props.meme.text1} text2={props.meme.text2} text3={props.meme.text3} color={props.meme.color} font={props.meme.font} size={props.meme.size}/>
        </Col>
        <Col className="mt-5">
          <div className="mycard">
            <MemeCard view="false" setDirty={props.setDirty} meme={props.meme} userInfo={props.userInfo} loggedIn={props.loggedIn}/>
          </div>
        </Col>
      </Row>
    </Container>
      
  );
}

export {MemeDetails};
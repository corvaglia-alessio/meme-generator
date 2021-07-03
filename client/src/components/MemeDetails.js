import {Row, Col, Container} from 'react-bootstrap/';
import {MemeViewer} from './MemeViewer.js'
import {MemeCard} from './MemeCard.js'


function MemeDetails(props) {
  let texts = [];
  let i=0;

  if(props.meme.upleft != null){
    texts[i] = props.meme.upleft;
    i++
  }
  if(props.meme.upcenter != null){
    texts[i] = props.meme.upcenter;
    i++
  }
  if(props.meme.upright != null){
    texts[i] = props.meme.upright;
    i++
  }
  if(props.meme.centerleft != null){
    texts[i] = props.meme.centerleft;
    i++
  }
  if(props.meme.centercenter != null){
    texts[i] = props.meme.centercenter;
    i++
  }
  if(props.meme.centerright != null){
    texts[i] = props.meme.centerright;
    i++
  }
  if(props.meme.downleft != null){
    texts[i] = props.meme.downleft;
    i++
  }
  if(props.meme.downcenter != null){
    texts[i] = props.meme.downcenter;
    i++
  }
  if(props.meme.downright != null){
    texts[i] = props.meme.downright;
    i++
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <MemeViewer img={props.img} text1={texts[0]} text2={texts[1]} text3={texts[2]} color={props.meme.color} font={props.meme.font} size={props.meme.size}/>
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
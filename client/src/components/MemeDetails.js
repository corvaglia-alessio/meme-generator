import {Row, Col} from 'react-bootstrap/';
import {MemeViewer} from './MemeViewer.js'
import {MemeCard} from './MemeCard.js'


function MemeDetails(props) {
  return (
      <Row>
        <Col>
          <MemeViewer img={props.img} />
        </Col>
        <Col>
          <Row className="mt-4 text-center Details">
            <MemeCard view="false" meme={props.meme} userInfo={props.userInfo} loggedIn={props.loggedIn}/>
          </Row>
        </Col>
      </Row>
  );
}

export {MemeDetails};
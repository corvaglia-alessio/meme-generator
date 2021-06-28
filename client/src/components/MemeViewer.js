import {Image, Container, Row, Col} from 'react-bootstrap/'
import img from './2.jpg'
function MemeViewer(props){

    var style = {backgroundImage: `url(${img})`};
    return(
        <Container style={style} className="Meme">
            <Row className="text-center mytext-up">
                <Col>
                    Pino
                </Col>
                <Col>
                    Pino
                </Col>
                <Col>
                    Pino
                </Col>
            </Row>
            <Row className="text-center mytext-center ">
                <Col>
                    Pino
                </Col>
                <Col>
                    Pino
                </Col>
                <Col>
                    Pino
                </Col>
            </Row>
            <Row className="text-center mytext-down">
                <Col>
                    Pino
                </Col>
                <Col>
                    Pino
                </Col>
                <Col>
                    Pino
                </Col>
            </Row>
        </Container>
    )
}

export {MemeViewer};
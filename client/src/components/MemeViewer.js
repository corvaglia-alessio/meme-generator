import {Image, Container, Row, Col} from 'react-bootstrap/'
import img from './2.jpg'
function MemeViewer(props){

    var style = {backgroundImage: `url(${img})`};
    return(
        <Container style={style} className="Meme">
            <Row className="text-center mytext-up">
                <Col>
                    Prova
                </Col>
                <Col>
                    
                </Col>
                <Col>
                    Prova
                </Col>
            </Row>
            <Row className="text-center mytext-center ">
                <Col>
                    
                </Col>
                <Col>
                    Prova
                </Col>
                <Col>
                    
                </Col>
            </Row>
            <Row className="text-center mytext-down">
                <Col>
                    Prova
                </Col>
                <Col>
                    Prova
                </Col>
                <Col>
                    Prova
                </Col>
            </Row>
        </Container>
    )
}

export {MemeViewer};
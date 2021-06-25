import {Container, Image, Row, Col, Card, Button} from 'react-bootstrap/'
import {MemeCard} from './MemeCard.js'

function MemeChooser(props){
    return(
        <Container fluid >
            <Row className="text-center m-2">
                <Col>
                    <h1>All memes</h1>
                </Col>
            </Row>
            <Row className="m-3">
                <Col className="text-center m-2">
                    <MemeCard/>
                </Col>
                <Col className="text-center m-2">
                    <MemeCard/>
                </Col>
                <Col className="text-center m-2">
                    <MemeCard/> 
                </Col>
            </Row>
            <Row className="m-3">
                <Col className="text-center m-2">
                    <MemeCard/> 
                </Col>
                <Col className="text-center m-2">
                    <MemeCard/>
                </Col>
                <Col className="text-center m-2">
                    <MemeCard/>  
                </Col>
            </Row>
        </Container>
    )
}

export {MemeChooser};
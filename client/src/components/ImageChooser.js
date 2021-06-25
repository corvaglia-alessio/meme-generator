import {Container, Image, Row, Col} from 'react-bootstrap/'
import img from './2.jpg'
function ImageChooser(props){
    return(
        <Container fluid >
            <Row className="text-center m-2">
                <Col>
                    <h1>Choose the image for your meme</h1>
                </Col>
            </Row>
            <Row className="m-3">
                <Col className="text-center m-2">
                    <Image src={img} className="Thumbnail" rounded />
                </Col>
                <Col className="text-center m-2">
                    <Image src={img} className="Thumbnail" rounded />
                </Col>
                <Col className="text-center m-2">
                    <Image src={img} className="Thumbnail" rounded />
                </Col>
            </Row>
            <Row className="m-3">
                <Col className="text-center m-2">
                    <Image src={img} className="Thumbnail" rounded />
                </Col>
                <Col className="text-center m-2">
                    <Image src={img} className="Thumbnail" rounded />
                </Col>
                <Col className="text-center m-2">
                    <Image src={img} className="Thumbnail" rounded />
                </Col>
            </Row>
        </Container>
    )
}

export {ImageChooser};
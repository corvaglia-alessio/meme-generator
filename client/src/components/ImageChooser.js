import {Container, Row, Col} from 'react-bootstrap/'
import {ImageCard} from './ImageCard'

function ImageChooser(props){
    return(
        <Container fluid >
            <Row className="text-center m-2">
                <Col>
                    <h1>Choose the image for your meme</h1>
                </Col>
            </Row>
            <Row className="text-center chooser">
                {props.imgs.map((i) => (<ImageCard key={i.id} image={i} className="m-2"></ImageCard>))}
            </Row>
        </Container>
    )
}

export {ImageChooser};
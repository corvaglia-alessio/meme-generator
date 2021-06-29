import {Container, Image, Row, Col} from 'react-bootstrap/'
// import img from './2.jpg'

function ImageChooser(props){
    return(
        <Container fluid >
            <Row className="text-center m-2">
                <Col>
                    <h1>Choose the image for your meme</h1>
                </Col>
            </Row>
            {props.imgs.map((i) => (<Image key={i.id} src={i.path} rounded/>))}
        </Container>
    )
}

export {ImageChooser};